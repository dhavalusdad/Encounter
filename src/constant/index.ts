export const tabArray = [
  {
    tabName: 'Demographics',
    titleName: 'Demographics / Intake',
    id: 'demographics',
    nextId: 'abcn',
    defaultValue: {
      patientName: '',
      address: '',
      phoneNumber: '',
      dateOfBirth: ''
    }
  },
  {
    tabName: 'ABCN',
    titleName: 'ABCN',
    id: 'abcn',
    nextId: 'medications',
    previousId: 'demographics',
    defaultValue: {}
  },
  {
    tabName: 'Medications',
    titleName: 'Medications',
    id: 'medications',
    nextId: 'chronic',
    previousId: 'abcn',
    defaultValue: {}
  },
  {
    tabName: 'Chronic Conditions',
    titleName: 'Chronic Conditions',
    id: 'chronic',
    nextId: 'allergies',
    previousId: 'mediations',
    defaultValue: {}
  },
  {
    tabName: 'Allergies',
    titleName: 'Allergies',
    id: 'allergies',
    nextId: 'surgeries',
    previousId: 'chronic',
    defaultValue: {}
  },
  {
    tabName: 'Surgeries',
    titleName: 'Surgeries',
    id: 'surgeries',
    nextId: 'hospitalizations',
    previousId: 'allergies',
    defaultValue: {},
  },
  {
    tabName: 'Hospitalizations',
    titleName: 'Hospitalizations',
    id: 'hospitalizations',
    nextId: 'reviewSystems',
    previousId: 'surgeries',
    defaultValue: {},
  },
  {
    tabName: 'Review of Systems',
    titleName: 'Review of Systems',
    id: 'reviewSystems',
    nextId: 'nurseTriage',
    previousId: 'hospitalizations',
    defaultValue: {},
  },
  {
    tabName: 'Nurse Triage',
    titleName: 'Nurse Triage',
    id: 'nurseTriage',
    nextId: 'careAdvice',
    previousId: 'reviewSystems',
    defaultValue: {},
  },
  {
    tabName: 'Care Advice',
    titleName: 'Care Advice',
    id: 'careAdvice',
    nextId: 'appointments',
    previousId: 'nurseTriage',
    defaultValue: {},
  },
  {
    tabName: 'Appointments',
    titleName: 'Scheduling',
    id: 'appointments',
    previousId: 'careAdvice',
    defaultValue: {},
  }
] as const;
