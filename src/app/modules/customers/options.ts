import {
  parses,
  renders,
  endpointV1,
} from '../../services/constants/form-options-configs';

export const CustomerConfigs: any = {
    name: 'List Create Customers Api',
    description: '',
    parses,
    renders,
    actions: {
        POST: {
        id: {
            type: 'integer',
            required: false,
            read_only: true,
            label: 'ID',
        },
        created: {
            type: 'datetime',
            required: false,
            read_only: true,
            label: 'Created',
        },
        modified: {
            type: 'datetime',
            required: false,
            read_only: true,
            label: 'Modified',
        },
        name: {
            type: 'string',
            required: false,
            read_only: false,
            label: 'Name',
            max_length: 45,
        },
        angaza_qid: {
            type: 'string',
            required: false,
            read_only: false,
            label: 'Angaza qid',
            max_length: 45,
        },
        primary_phone: {
            type: 'string',
            required: false,
            read_only: false,
            label: 'Primary phone',
            max_length: 45,
        },
        id_number: {
            type: 'string',
            required: false,
            read_only: false,
            label: 'Id number',
            max_length: 15,
        },
        region: {
            type: 'field',
            required: false,
            read_only: false,
            label: 'Region',
            max_length: 45,
            "display_name": "name",
            "url": `${endpointV1}locations/`
        },
        village: {
            type: 'string',
            required: false,
            read_only: false,
            label: 'Village',
            max_length: 45,
        },
        closest_spark_agent_shop: {
            type: 'string',
            required: false,
            read_only: false,
            label: 'Closest spark agent shop',
            help_text: 'In Kms',
            max_length: 45,
        },
        occupation: {
            type: 'string',
            required: false,
            read_only: false,
            label: 'Occupation',
            help_text: 'In Kms',
            max_length: 45,
        },
        avg_monthly_income: {
            type: 'string',
            required: false,
            read_only: false,
            label: 'Avg monthly income',
            help_text: 'In Kms',
            max_length: 45,
        },
        },
    },
};
