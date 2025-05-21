import { Header } from '@encounter/common';
import '../../index.css';
import { useSelector } from 'react-redux';
import { dispatchSetActiveTab } from '@encounter/redux/dispatch/encounter.dispatch';
import { encounterSelector } from '@encounter/redux/ducks/encounter';
import clsx from 'clsx';

const formArray = [
  {
    tabName: 'Demographics',
    titleName: 'Demographics / Intake',
    id: 'demographics'
  },
  {
    tabName: 'ABCN',
    titleName: 'ABCN',
    id: 'abcn'
  }
];

const Layout = () => {
  const { activeTab } = useSelector(encounterSelector);
  return (
    <div className="text-Primary-500">
      <Header />
      <div>
        {formArray.map((el) => {
          return (
            <div
              key={el.id}
              onClick={() => {
                dispatchSetActiveTab(el.id);
              }}
              className={clsx('px-3 py-2.5 truncate cursor-pointer', {
                'bg-Primary-300 text-white rounded-10px':
                  activeTab === el.id
              })}>
              {el.tabName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Layout;
