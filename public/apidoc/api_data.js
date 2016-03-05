define({ "api": [
  {
    "type": "get",
    "url": "/comments",
    "title": "Read all comments",
    "version": "0.0.0",
    "name": "GetComments",
    "group": "Comments",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>This route can gets all comments are editing in the application. This route isn't used but we have make it because thi is the base command.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The Description of the comments.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Comments-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "date_created",
            "description": "<p>Creation Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Comment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>User-ID how are edit the comment.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/comments.js",
    "groupTitle": "Comments"
  },
  {
    "type": "post",
    "url": "/comments",
    "title": "Create a comment",
    "version": "0.0.0",
    "name": "PostComment",
    "group": "Comments",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The Description of the comments.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Comments-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "date_created",
            "description": "<p>Creation Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Comment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>User-ID how are edit the comment.</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/comments.js",
    "groupTitle": "Comments"
  },
  {
    "type": "post",
    "url": "/issues",
    "title": "Create an issue",
    "version": "0.0.0",
    "name": "CreateIssue",
    "group": "Issues",
    "description": "<p>It creates an issue</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/issues/",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The Description of the comments.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the issue (according to a list).</p>"
          },
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "user",
            "description": "<p>User how are created the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "date_created",
            "description": "<p>Creation date of issue</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "coordonate",
            "description": "<p>Coordinated the problem (longitude and latitude)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "coordonate.lat",
            "description": "<p>Latitude coordinate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "coordonate.long",
            "description": "<p>Longitude coordinate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "[]",
            "optional": false,
            "field": "comments_user",
            "description": "<p>Board with all comments of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "comments_user.comment",
            "description": "<p>A comment of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "[]",
            "optional": false,
            "field": "action",
            "description": "<p>Board with all actions of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "action.date",
            "description": "<p>Creation date of action</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "action.action",
            "description": "<p>Definition of the action</p>"
          },
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "action.comment",
            "description": "<p>A comment of the action</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "action.current",
            "description": "<p>If the action is the current = true</p>"
          },
          {
            "group": "Success 200",
            "type": "[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Board with all tags of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tags.name",
            "description": "<p>Name of the tag</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnexpectedToken",
            "description": "<p>The issue has some parameters with uncorrect type</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>There are missing parameters</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Unexpected Token):",
          "content": "  <h1>Unexpected token j</h1>\n<h2>400</h2>\n<pre>SyntaxError: Unexpected token j",
          "type": "json"
        },
        {
          "title": "Response (Validation Error):",
          "content": "{\"message\": \"Issue validation failed\",\n  \"name\": \"ValidationError\",\n  \"errors\": {\n    \"description\": {\n      \"properties\": {\n        \"type\": \"required\",\n        \"message\": \"Path `{PATH}` is required.\",\n        \"path\": \"description\"\n      },\n      \"message\": \"Path `description` is required.\",\n      \"name\": \"ValidatorError\",\n      \"kind\": \"required\",\n      \"path\": \"description\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/issues.js",
    "groupTitle": "Issues"
  },
  {
    "type": "delete",
    "url": "/issues/:id",
    "title": "Delete an issue with the id",
    "version": "0.0.0",
    "name": "DeleteIssue",
    "group": "Issues",
    "description": "<p>it's function can delete an issue with his id</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/issues/4711",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The Description of the comments.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the issue (according to a list).</p>"
          },
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "user",
            "description": "<p>User how are created the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "date_created",
            "description": "<p>Creation date of issue</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "coordonate",
            "description": "<p>Coordinated the problem (longitude and latitude)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "coordonate.lat",
            "description": "<p>Latitude coordinate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "coordonate.long",
            "description": "<p>Longitude coordinate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "[]",
            "optional": false,
            "field": "comments_user",
            "description": "<p>Board with all comments of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "comments_user.comment",
            "description": "<p>A comment of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "[]",
            "optional": false,
            "field": "action",
            "description": "<p>Board with all actions of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "action.date",
            "description": "<p>Creation date of action</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "action.action",
            "description": "<p>Definition of the action</p>"
          },
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "action.comment",
            "description": "<p>A comment of the action</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "action.current",
            "description": "<p>If the action is the current = true</p>"
          },
          {
            "group": "Success 200",
            "type": "[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Board with all tags of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tags.name",
            "description": "<p>Name of the tag</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnexpectedToken",
            "description": "<p>The issue has some parameters with uncorrect type</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>There are missing parameters</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Unexpected Token):",
          "content": "  <h1>Unexpected token j</h1>\n<h2>400</h2>\n<pre>SyntaxError: Unexpected token j",
          "type": "json"
        },
        {
          "title": "Response (Validation Error):",
          "content": "{\"message\": \"Issue validation failed\",\n  \"name\": \"ValidationError\",\n  \"errors\": {\n    \"description\": {\n      \"properties\": {\n        \"type\": \"required\",\n        \"message\": \"Path `{PATH}` is required.\",\n        \"path\": \"description\"\n      },\n      \"message\": \"Path `description` is required.\",\n      \"name\": \"ValidatorError\",\n      \"kind\": \"required\",\n      \"path\": \"description\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/issues.js",
    "groupTitle": "Issues"
  },
  {
    "type": "get",
    "url": "/issues",
    "title": "Get all issues",
    "version": "0.0.0",
    "name": "GetAllIssues",
    "group": "Issues",
    "description": "<p>it's function can recover all the issues</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/issues/",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The Description of the comments.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the issue (according to a list).</p>"
          },
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "user",
            "description": "<p>User how are created the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "date_created",
            "description": "<p>Creation date of issue</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "coordonate",
            "description": "<p>Coordinated the problem (longitude and latitude)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "coordonate.lat",
            "description": "<p>Latitude coordinate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "coordonate.long",
            "description": "<p>Longitude coordinate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "[]",
            "optional": false,
            "field": "comments_user",
            "description": "<p>Board with all comments of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "comments_user.comment",
            "description": "<p>A comment of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "[]",
            "optional": false,
            "field": "action",
            "description": "<p>Board with all actions of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "action.date",
            "description": "<p>Creation date of action</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "action.action",
            "description": "<p>Definition of the action</p>"
          },
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "action.comment",
            "description": "<p>A comment of the action</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "action.current",
            "description": "<p>If the action is the current = true</p>"
          },
          {
            "group": "Success 200",
            "type": "[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Board with all tags of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tags.name",
            "description": "<p>Name of the tag</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnexpectedToken",
            "description": "<p>The issue has some parameters with uncorrect type</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>There are missing parameters</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Unexpected Token):",
          "content": "  <h1>Unexpected token j</h1>\n<h2>400</h2>\n<pre>SyntaxError: Unexpected token j",
          "type": "json"
        },
        {
          "title": "Response (Validation Error):",
          "content": "{\"message\": \"Issue validation failed\",\n  \"name\": \"ValidationError\",\n  \"errors\": {\n    \"description\": {\n      \"properties\": {\n        \"type\": \"required\",\n        \"message\": \"Path `{PATH}` is required.\",\n        \"path\": \"description\"\n      },\n      \"message\": \"Path `description` is required.\",\n      \"name\": \"ValidatorError\",\n      \"kind\": \"required\",\n      \"path\": \"description\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/issues.js",
    "groupTitle": "Issues"
  },
  {
    "type": "get",
    "url": "/issues/:id",
    "title": "Get an issue with the id",
    "version": "0.0.0",
    "name": "GetIssue",
    "group": "Issues",
    "description": "<p>it's function can get an issue with his id</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/issues/4711",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The Description of the comments.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the issue (according to a list).</p>"
          },
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "user",
            "description": "<p>User how are created the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "date_created",
            "description": "<p>Creation date of issue</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "coordonate",
            "description": "<p>Coordinated the problem (longitude and latitude)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "coordonate.lat",
            "description": "<p>Latitude coordinate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "coordonate.long",
            "description": "<p>Longitude coordinate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "[]",
            "optional": false,
            "field": "comments_user",
            "description": "<p>Board with all comments of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "comments_user.comment",
            "description": "<p>A comment of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "[]",
            "optional": false,
            "field": "action",
            "description": "<p>Board with all actions of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "action.date",
            "description": "<p>Creation date of action</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "action.action",
            "description": "<p>Definition of the action</p>"
          },
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "action.comment",
            "description": "<p>A comment of the action</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "action.current",
            "description": "<p>If the action is the current = true</p>"
          },
          {
            "group": "Success 200",
            "type": "[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Board with all tags of the issue</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tags.name",
            "description": "<p>Name of the tag</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnexpectedToken",
            "description": "<p>The issue has some parameters with uncorrect type</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>There are missing parameters</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Unexpected Token):",
          "content": "  <h1>Unexpected token j</h1>\n<h2>400</h2>\n<pre>SyntaxError: Unexpected token j",
          "type": "json"
        },
        {
          "title": "Response (Validation Error):",
          "content": "{\"message\": \"Issue validation failed\",\n  \"name\": \"ValidationError\",\n  \"errors\": {\n    \"description\": {\n      \"properties\": {\n        \"type\": \"required\",\n        \"message\": \"Path `{PATH}` is required.\",\n        \"path\": \"description\"\n      },\n      \"message\": \"Path `description` is required.\",\n      \"name\": \"ValidatorError\",\n      \"kind\": \"required\",\n      \"path\": \"description\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/issues.js",
    "groupTitle": "Issues"
  },
  {
    "type": "get",
    "url": "/users/citizens",
    "title": "Get every user how are a citizen.",
    "version": "0.0.0",
    "name": "GetCitizen",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>This route can get every user how are the field citizen with 1.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/user/4711",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "citizen",
            "description": "<p>1 if the user is a citizen 0 if not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "staff",
            "description": "<p>1 if the user is a staff 0 if not.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Pseudo of the user.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/staffs",
    "title": "Get all staff.",
    "version": "0.0.0",
    "name": "GetStaff",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>This route can get every user how are the field staff with 1.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/user/4711",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "citizen",
            "description": "<p>1 if the user is a citizen 0 if not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "staff",
            "description": "<p>1 if the user is a staff 0 if not.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Pseudo of the user.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create an user",
    "version": "0.0.0",
    "name": "PostUser",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>This route can create a news user with status staff or not.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The Description of the comments.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "citizen",
            "description": "<p>1 if the user is a citizen 0 if not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "staff",
            "description": "<p>1 if the user is a staff 0 if not.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Pseudo of the user.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/users.js",
    "groupTitle": "Users"
  }
] });
