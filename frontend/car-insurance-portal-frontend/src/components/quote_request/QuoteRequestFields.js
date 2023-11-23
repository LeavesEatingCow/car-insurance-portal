export const fields = [
  {
    section: 1,
    items: [
      {
        label: "Date of birth (MM/DD/YYYY)",
        type: "text",
        value: "dateOfBirth"
      },
      {
        label: "Address",
        type: "text",
        value: "address"
      },
      {
        label: "Gender",
        type: "select",
        value: "gender",
        options: ["Male", "Female", "Non-Binary"]
      },
      {
        label: "Are you married?",
        type: "select",
        value: "married",
        options: ["Married", "Single"]
      },
      {
        label: "Are you a homeowner?",
        type: "select",
        value: "homeowner",
        options: ["Yes", "No"]
      }
    ]
  },
  {
    section: 2,
    items: [
      {
        label: "Car Make",
        type: "text",
        value: "carMake"
      },
      {
        label: "Car Model",
        type: "text",
        value: "carModel"
      },
      {
        label: "Car Year",
        type: "text",
        value: "carYear"
      },
      {
        label: "VIN",
        type: "text",
        value: "vin"
      },
      {
        label: "Mileage",
        type: "text",
        value: "mileage"
      }
    ]
  },
  {
    section: 3,
    items: [
      {
        label: "Primary Use of Vehicle",
        type: "select",
        value: "primaryUse",
        options: ["COMMERCIAL", "PERSONAL"]
      },
      {
        label: "How Many Accidents Have You Been in in the Past Three Years",
        type: "select",
        value: "accidents",
        options: ["1", "2", "3", "4", "5+"]
      }
    ]
  },
  {
    section: 4,
    items: [
      {
        label: "Desired Coverage Type",
        type: "checkboxGroup",
        value: "coverageTypes",
        options: ["LIABILITY", "COLLISION", "COMPREHENSIVE", "UNINSURED_MOTORIST", "MEDICAL_PAYMENTS", "PERSONAL_INJURY"]
      },
      {
        label: "Are you interested in insuring an additional driver? (This may qualify you for a discount)",
        type: "select",
        value: "additionalDriver",
        options: ["Yes", "No"]
      }
    ]
  },
  {
    section: 5,
    items: [
      {
        label: "Add any additional information you want to include here",
        type: "textarea",
        value: "additionalInfo"
      }
    ]
  },
  {
    section: 6,
    items: [
      {
        label: "Preview",
        type: "emailPreview"
      }
    ]
  },
  {
    section: 7,
    items: [
      {
        label: "Select Agencies to Send Quote Request",
        type: "checkboxGroup",
        value: "selectedAgencies",
        options: ["NATIONWIDE", "PROGRESSIVE", "TRAVELERS", "ALLSTATE", "GEICO", "STATE_FARM", "LIBERTY_MUTUAL", "FARMERS"]
      }
    ]
  },
  {
    section: 8,
    items: []
  }
]