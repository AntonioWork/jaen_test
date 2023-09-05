// PopupContext.tsx
import React, {
  createContext, useContext, useReducer, ReactNode, useMemo,
} from 'react';

// Define the Popup state interface
interface PopupState {
  popups: { name: string; content: ReactNode }[];
}

enum POPUP_ACTIONS {
  OPEN_POPUP = 'OPEN_POPUP',
  CLOSE_POPUP = 'CLOSE_POPUP',
}

type IOpenPopup = { type: POPUP_ACTIONS.OPEN_POPUP; payload: { name: string; content: ReactNode } };
type IClosePopup = { type: POPUP_ACTIONS.CLOSE_POPUP; payload: { name: string } };
// Define the action types
type PopupAction =
    | IOpenPopup
    | IClosePopup;

// Create the initial state
const initialState: PopupState = {
  popups: [],
};

// Create the context
const PopupContext = createContext<{
  state: PopupState;
  actions: {
    openPopup:(params: IOpenPopup['payload'])=>void
    closePopup:(params: IClosePopup['payload'])=>void
  }
} | undefined>(undefined);

// Create a reducer function
const popupReducer = (state: PopupState, action: PopupAction): PopupState => {
  switch (action.type) {
    case POPUP_ACTIONS.OPEN_POPUP: {
      const { content, name } = action.payload;
      // Check if a popup with the same name already exists
      const existingPopupIndex = state.popups.findIndex((popup) => popup.name === name);
      if (existingPopupIndex !== -1) {
        // Replace the existing popup
        state.popups[existingPopupIndex] = { name, content };
        return { ...state };
      }
      // Add a new popup
      return {
        popups: [...state.popups, { name, content }],
      };
    }
    case POPUP_ACTIONS.CLOSE_POPUP: {
      const { name } = action.payload;
      return {
        popups: state.popups.filter((popup) => popup.name !== name),
      };
    }
    default:
      return state;
  }
};

// Create the PopupProvider component
export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(popupReducer, initialState);

  const openPopup = (payload: IOpenPopup['payload']) => {
    dispatch({ type: POPUP_ACTIONS.OPEN_POPUP, payload });
  };

  const closePopup = (payload: IClosePopup['payload']) => {
    dispatch({ type: POPUP_ACTIONS.CLOSE_POPUP, payload });
  };

  const value = useMemo(() => {
    return {
      state,
      actions: {
        openPopup,
        closePopup,
      },
    };
  }, [state]);

  return (
    <PopupContext.Provider value={value}>
      {children}
    </PopupContext.Provider>
  );
};

// Create a custom hook for using the Popup context
export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};
