import { encounterSelector } from '@encounter/redux/ducks/encounter';
import { useSelector } from 'react-redux';
import Demographics from './Forms/Demographics';
import { Accordion, AccordionItem } from '@encounter/common';
import { tabArray } from '@encounter/constant';
import clsx from 'clsx';
import ABDN from './Forms/ABDN';
import Medications from './Forms/Medications';
import Chronic from './Forms/Chronic';
import Allergies from './Forms/Allergies';
import Surgeries from './Forms/Surgeries';
import Hospitalizations from './Forms/Hospitalizations';
import ReviewSystems from './Forms/ReviewSystems';
import NurseTriage from './Forms/NurseTriage';
import CareAdvice from './Forms/CareAdvice';
import Appointments from './Forms/Appointments';

const FormWrapper = () => {
  const { activeTab } = useSelector(encounterSelector);
  return (
    <div className="w-full">
      <Accordion className="relative px-22px py-26px flex flex-col gap-26px">
        {tabArray.map((el) => (
          <AccordionItem
          key={el.id}
            titleClassName={clsx(
              '',
              activeTab === el.id ? '!text-Primary-700' : '!text-Gray-900'
            )}
            // subtitleClassName={clsx(
            //   '',
            //   form?.id === activeDisposition?.form?.id
            //     ? '!text-Primary-700'
            //     : '!text-Gray-900'
            // )}
            iconClassName={clsx(
              '',
              activeTab === el.id
                ? '!text-Primary-700'
                : '!text-Gray-900'
            )}
            index={el.id}
            title={el?.titleName}
            // subTitle={form?.information}
            // onClick={(hasOpen) => {
            //   if (hasOpen) {
            //     if (
            //       menuDisposition &&
            //       activeDisposition?.question?.[0]?.disposition_form_id !==
            //         form?.id
            //     ) {
            //       dispatchSetDisposition({
            //         ...menuDisposition,
            //         form,
            //         question: [],
            //         answer: []
            //       });
            //     }
            //   }
            // }}
            >
            {el.id === 'demographics' && <Demographics />}
            {el.id === 'abcn' && <ABDN />}
            {el.id === 'medications' && <Medications />}
            {el.id === 'chronic' && <Chronic />}
            {el.id === 'allergies' && <Allergies />}
            {el.id === 'surgeries' && <Surgeries />}
            {el.id === 'hospitalizations' && <Hospitalizations />}
            {el.id === 'reviewSystems' && <ReviewSystems />}
            {el.id === 'nurseTriage' && <NurseTriage />}
            {el.id === 'careAdvice' && <CareAdvice />}
            {el.id === 'appointments' && <Appointments />}

          </AccordionItem>
        ))}
      </Accordion>

    </div>
  );
};

export default FormWrapper;
