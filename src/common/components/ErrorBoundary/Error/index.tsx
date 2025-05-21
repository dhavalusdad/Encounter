import Icon from '@encounter/common/components/Icon';

interface ErrorProps {
  path?: string;
}

export const Error: React.FC<ErrorProps> = ({ path }) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-30px">
        <Icon name="errorSvg" />
        <div className="flex flex-col items-center gap-3 -mt-10">
          <h3 className="text-30px font-medium leading-9 text-black">
            Something went wrong.
          </h3>
          {path && (
            <p className="text-xl font-normal leading-6 text-black">
              Please return to dashboard or try aging later
            </p>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Error;
