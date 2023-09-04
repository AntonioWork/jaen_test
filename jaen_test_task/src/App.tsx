import { EngageCardList } from './components';
import { MOCK_ENGAGE_GROUPS } from './mock';

export const App = () => {
  return (
    <div className="theme-dark h-screen w-screen bg-base-300">
      <div className=" text-base-content">
        <EngageCardList groups={MOCK_ENGAGE_GROUPS} />
      </div>

    </div>
  );
};
