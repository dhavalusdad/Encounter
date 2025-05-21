export const jsonParse = <T>(jsonString: string, defaultValue: T): T => {
  try {
    return JSON.parse(jsonString) as T;
  } catch {
    return defaultValue;
  }
};

export const jsonStringify = <T>(value: T, defaultValue: ''): string => {
  try {
    return JSON.stringify(value);
  } catch {
    return defaultValue;
  }
};

export const storageHelper = (type: 'local' | 'session' = 'local') => {
  const storage = type === 'session' ? sessionStorage : localStorage;
  // Store data
  return {
    setItem: <T>(key: string, data: T, storageType = 'local'): void => {
      try {
        const jsonData = jsonStringify(data, '');
        if (storageType === 'local') storage.setItem(key, jsonData);
      } catch {
        // Handle storage errors silently or log them
      }
    },

    // Retrieve data with optional default value
    getItem: <T>(key: string, defaultValue: T) => {
      const storedData = storage.getItem(key);
      if (!storedData) {
        return defaultValue; // Return the default value if no data is found
      }
      return jsonParse(storedData?.toString(), defaultValue);
    },

    // Remove data
    removeItem: (key: string): void => {
      try {
        storage.removeItem(key);
      } catch {
        // Handle errors silently
      }
    }
  };
};

export const handleRedirect = () => {
  const clientRefId = '123456'; // replace with actual dynamic value
  const dob = '21051999'; // in ddmmyyyy format
  const gender = 'Male'; // or 'Female'
  const ageTypeId = '1'; // example value
  const genderTypeId = '1'; // example value
  const protocolTypeName = 'General'; // example value

  const url = `https://app-qa.247telehealth.com/index.php?Object=Logout&Action=TA&SecurityKey=7eWFdYp6^ezW&ShowHeader=True&ClientRefId=${clientRefId}&DateOfBirth=${dob}&Gender=${gender}&AgeTypeId=${ageTypeId}&GenderTypeId=${genderTypeId}&ProtocolType=${protocolTypeName}`;

  window.open(url, '_blank');
};

export const handleReviewRedirect = () => {
  const url = `https://app-qa.247telehealth.com/index.php?Object=Logout&Action=TA&SecurityKey=7eWFdYp6^ezW&ShowHeader=True&ClientRefId={ClientRefId}&DateOfBirth={ddmmyyyy}&Gender={gender}&AgeTypeId={AgeTypeId}&GenderTypeId={GenderTypeId}&ProtocolType={ProtocolTypeName}`;
  window.open(url, '_blank');
};

export const handleReviewSmsRedirect = () => {
  const url = `https://app-qa.247telehealth.com/index.php?Object=MasterApp&Flow=2&SecurityKey=7eWFdYp6^ezW&ClientRefId={ClientRefId}&ShowHeader=True&DateOfBirth={ddmmyyyy}&Gender={gender}&AgeTypeId={AgeTypeId}&GenderTypeId={GenderTypeId}&ProtocolType={ProtocolTypeName}`;
  window.open(url, '_blank');
};
