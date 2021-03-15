import { parses, renders, endpointV1 } from '../../services/constants/form-options-configs'

export const optionsField: any =
{
    "name": "Create List User",
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
            "image": {
                "type": "image upload",
                "required": false,
                "read_only": false,
                "label": "Image"
            },
            "profile_image": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Profile image"
            },
            "full_name": {
                "type": "string",
                "required": false,
                "read_only": true,
                "label": "Full name"
            },
            "password": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Password",
                "max_length": 128
            },
            "last_login": {
                "type": "datetime",
                "required": false,
                "read_only": false,
                "label": "Last login"
            },
            "username": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Username",
                "help_text": "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.",
                "max_length": 150
            },
            "first_name": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "First name",
                "max_length": 150
            },
            "last_name": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Last name",
                "max_length": 150
            },
            "date_joined": {
                "type": "datetime",
                "required": false,
                "read_only": false,
                "label": "Date joined"
            },
            "role": {
                "type": "choice",
                "required": false,
                "read_only": false,
                "label": "Role",
                "choices": [
                    {
                        "value": "ST",
                        "display_name": "Store Keeper"
                    },
                    {
                        "value": "AD",
                        "display_name": "Admin"
                    },
                    {
                        "value": "IN",
                        "display_name": "Installer"
                    },
                    {
                        "value": "SR",
                        "display_name": "Sales Rep"
                    },
                    {
                        "value": "TL",
                        "display_name": "Team Lead"
                    },
                    {
                        "value": "CS",
                        "display_name": "Call Support"
                    }
                ]
            },
            "phone": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Phone",
                "max_length": 50
            },
            "google_profile_image": {
                "type": "url",
                "required": false,
                "read_only": false,
                "label": "Google profile image",
                "max_length": 200
            },
            "verified": {
                "type": "boolean",
                "required": false,
                "read_only": false,
                "label": "Verified"
            },
            "dummy": {
                "type": "boolean",
                "required": false,
                "read_only": false,
                "label": "Dummy"
            },
            "available": {
                "type": "boolean",
                "required": false,
                "read_only": true,
                "label": "Available"
            },
            "email": {
                "type": "email",
                "required": true,
                "read_only": false,
                "label": "Email",
                "max_length": 254
            },
            "id_number": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Id number",
                "max_length": 20
            }
        }
    }
}