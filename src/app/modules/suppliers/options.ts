import { parses, renders} from '../../services/constants/form-options-configs'

export const optionsField: any =
{
    "name": "List Create Suppliers Api",
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
            },
            "name": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Name",
                "max_length": 45
            },
            "email": {
                "type": "email",
                "required": true,
                "read_only": false,
                "label": "Email",
                "max_length": 45
            },
            "phone": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Phone",
                "max_length": 20
            },
            "contact_person": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Contact person",
                "max_length": 150
            },
            "contact_phone": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Contact phone",
                "max_length": 150
            }
        }
    }
}