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
    defaultValue: {
      chiefComplaint: ''
    }
  },
  {
    tabName: 'Medications',
    titleName: 'Medications',
    id: 'medications',
    nextId: 'chronic',
    previousId: 'abcn',
    defaultValue: {
      medications: {
        medications: {
          label: '',
          value: ''
        }
      }
    }
  },
  {
    tabName: 'Chronic Conditions',
    titleName: 'Chronic Conditions',
    id: 'chronic',
    nextId: 'allergies',
    previousId: 'mediations',
    defaultValue: { chronicConditions: '' }
  },
  {
    tabName: 'Allergies',
    titleName: 'Allergies',
    id: 'allergies',
    nextId: 'surgeries',
    previousId: 'chronic',
    defaultValue: { allergies: '' }
  },
  {
    tabName: 'Surgeries',
    titleName: 'Surgeries',
    id: 'surgeries',
    nextId: 'hospitalizations',
    previousId: 'allergies',
    defaultValue: { surgeries: '' }
  },
  {
    tabName: 'Hospitalizations',
    titleName: 'Hospitalizations',
    id: 'hospitalizations',
    nextId: 'reviewSystems',
    previousId: 'surgeries',
    defaultValue: { hospitalizations: '' }
  },
  {
    tabName: 'Review of Systems',
    titleName: 'Review of Systems',
    id: 'reviewSystems',
    nextId: 'nurseTriage',
    previousId: 'hospitalizations',
    defaultValue: { review: '' }
  },
  {
    tabName: 'Nurse Triage',
    titleName: 'Nurse Triage',
    id: 'nurseTriage',
    nextId: 'careAdvice',
    previousId: 'reviewSystems',
    defaultValue: {}
  },
  {
    tabName: 'Care Advice',
    titleName: 'Care Advice',
    id: 'careAdvice',
    nextId: 'appointments',
    previousId: 'nurseTriage',
    defaultValue: { careAdvice: '' }
  },
  {
    tabName: 'Appointments',
    titleName: 'Scheduling',
    id: 'appointments',
    previousId: 'careAdvice',
    defaultValue: { apointmentDate: '', followUp: '' }
  }
] as const;
