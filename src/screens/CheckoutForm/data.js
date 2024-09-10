export const formfields=[
    {
        title:'PERSONAL INFO',
        fields:[
            {
                label: 'First Name',
                type: 'input',
                placeholder: 'First Name',
                multiline: false,
                name: "firstName"
        
            },
            {
                label: 'Last Name',
                type: 'input',
                placeholder: 'Last Name',
                multiline: false,
                name: "lastName",
        
            },
            {
                label: 'Email',
                type: 'input',
                placeholder: 'Email',
                multiline: false,
                name: "email"
            },
        ]
    },
    {
        title:"BOOKING INFO",
        fields:[
            {
                label: 'Date',
                type: 'date',
                placeholder: 'DD-MM-YYYY',
                multiline: false,
                name: "date"
        
            },
            {
                label: 'Time',
                type: 'time',
                placeholder: 'HH:MM',
                multiline: false,
                name: "time",
        
            },
        ]
    }
]