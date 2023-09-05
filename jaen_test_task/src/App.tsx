import { EngageCardList, PopupViewer } from './components';
import { MOCK_ENGAGE_GROUPS } from './mock';
import { PopupProvider } from './context';

export const App = () => {
  return (
    <PopupProvider>
      <div className="theme-dark h-screen w-screen bg-base-300">
        <div className="text-base-content">
          <EngageCardList groups={MOCK_ENGAGE_GROUPS} />
        </div>
      </div>
      <PopupViewer />
    </PopupProvider>
  );
};
