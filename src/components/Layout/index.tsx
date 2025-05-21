import { Header } from '@encounter/common';
import { useSelector } from 'react-redux';
import { dispatchSetActiveForm } from '@encounter/redux/dispatch/encounter.dispatch';
import { encounterSelector } from '@encounter/redux/ducks/encounter';
import clsx from 'clsx';
import { tabArray } from '@encounter/constant';
import FormWrapper from '@encounter/components/Layout/FormWrapper';
import RightSideBar from './RightSideBar';

const Layout = () => {
  const { activeForm } = useSelector(encounterSelector);
  return (
    <div className="text-Primary-500">
      <Header />
      <div className="flex flex-row gap-2 row">
        <div className="flex flex-col gap-2 w-full">
          {tabArray.map((el) => {
            return (
              <div
                key={el.id}
                onClick={() => {
                  dispatchSetActiveForm(el.id);
                }}
                className={clsx('px-3 py-2.5 truncate cursor-pointer', {
                  'bg-Primary-300 text-white rounded-10px': activeForm === el.id
                })}>
                {el.tabName}
              </div>
            );
          })}
        </div>
        <FormWrapper />
        <div className="w-full">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
