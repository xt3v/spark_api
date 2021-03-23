import { parses, renders, endpointV1 } from "../../../services/constants/form-options-configs";

const PriceGroupFields: any = {
    "name": "List Create Price Groups Api",
    "description": "",
    renders,
    parses,
    "actions": {
        "POST": {
            "id": {
                "type": "integer",
                "required": false,
                "read_only": true,
                "label": "ID"
            },
            "name": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Name"
            },
            "description": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Description",
                "max_length": 400
            },
            "type": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Type",
                "choices": [
                    {
                        "value": "I",
                        "display_name": "Installment"
                    },
                    {
                        "value": "C",
                        "display_name": "Cash"
                    }
                ]
            },
            "days_of_credit": {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Days of Credit"
            },
            "daily_rate": {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Daily Rate"
            },
            "number_of_days": {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Number of Days"
            },
            "min_activation_amount": {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Min. activation amount"
            },
            "cash_amount": {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Cash Amount"
            },
            "pay_go_provider": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Pay Go Provider",
                "display_name": "name",
                "url": `${endpointV1}pay-go-providers/`
            },
            "created": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Created"
            },
            "modified": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Modified"
            }

        }
    }
}
export {
    PriceGroupFields
}