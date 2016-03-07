define({ "api": [
  {
    "type": "delete",
    "url": "/comments/id",
    "title": "Delete a comment",
    "version": "0.0.0",
    "name": "DeleteComment",
    "group": "Comments",
    "description": "<p>This route can delete a specific comment with id.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/comments/56dbf15c1ed727f82d272ce2",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Comments-ID.</p>"
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
            "field": "NotFound",
            "description": "<p>There are not comment with this id</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotValid",
            "description": "<p>The request is not valid</p>"
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
          "title": "Response (Not Found):",
          "content": "\nuser not found",
          "type": "json"
        },
        {
          "title": "Response (Not Valid):",
          "content": "\n{\n  \"message\": \"Cast to ObjectId failed for value \\\"null=56dae5ce12916cf4357035c6\\\" at path \\\"_id\\\"\",\n  \"name\": \"CastError\",\n  \"kind\": \"ObjectId\",\n  \"value\": \"null=56dae5ce12916cf4357035c6\",\n  \"path\": \"_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/comments.js",
    "groupTitle": "Comments"
  },
  {
    "type": "get",
    "url": "/comments/id",
    "title": "Get a comment",
    "version": "0.0.0",
    "name": "GetComment",
    "group": "Comments",
    "description": "<p>This route can gets a specific comment with id.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/comments/56dbf15c1ed727f82d272ce2",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Comments-ID.</p>"
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
            "type": "Schema.Types.ObjectId",
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
            "field": "NotFound",
            "description": "<p>There are not comments</p>"
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
          "title": "Response (Not Found):",
          "content": "\n[]",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/comments.js",
    "groupTitle": "Comments"
  },
  {
    "type": "get",
    "url": "/comments",
    "title": "Read all comments",
    "version": "0.0.0",
    "name": "GetComments",
    "group": "Comments",
    "description": "<p>This route can gets all comments are editing in the application. This route isn't used but we have make it because thi is the base command.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/comments",
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
            "type": "Schema.Types.ObjectId",
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
            "field": "NotFound",
            "description": "<p>There are not comments</p>"
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
          "title": "Response (Not Found):",
          "content": "\n[]",
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
    "name": "PostComments",
    "group": "Comments",
    "description": "<p>This route can gets all comments are editing in the application. This route isn't used but we have make it because thi is the base command.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/comments",
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
            "type": "Schema.Types.ObjectId",
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
            "field": "UnexpectedToken",
            "description": "<p>The user has some parameters with uncorrect type</p>"
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
          "content": "\n  <h1>Unexpected token j</h1>\n<h2>400</h2>\n<pre>SyntaxError: Unexpected token j",
          "type": "json"
        },
        {
          "title": "Response (Validation Error):",
          "content": "{\n  \"message\": \"Comment validation failed\",\n  \"name\": \"ValidationError\",\n  \"errors\": {\n    \"user\": {\n      \"properties\": {\n        \"type\": \"required\",\n        \"message\": \"Path `{PATH}` is required.\",\n        \"path\": \"user\"\n      },\n      \"message\": \"Path `user` is required.\",\n      \"name\": \"ValidatorError\",\n      \"kind\": \"required\",\n      \"path\": \"user\"\n    },\n    \"description\": {\n      \"properties\": {\n        \"type\": \"required\",\n        \"message\": \"Path `{PATH}` is required.\",\n        \"path\": \"description\"\n      },\n      \"message\": \"Path `description` is required.\",\n      \"name\": \"ValidatorError\",\n      \"kind\": \"required\",\n      \"path\": \"description\"\n    },\n    \"date_created\": {\n      \"properties\": {\n        \"type\": \"required\",\n        \"message\": \"Path `{PATH}` is required.\",\n        \"path\": \"date_created\"\n      },\n      \"message\": \"Path `date_created` is required.\",\n      \"name\": \"ValidatorError\",\n      \"kind\": \"required\",\n      \"path\": \"date_created\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/comments.js",
    "groupTitle": "Comments"
  },
  {
    "type": "post",
    "url": "/comments/:action_id/:id",
    "title": "Assign comment to an action",
    "version": "0.0.0",
    "name": "PostCommentsAction",
    "group": "Comments",
    "description": "<p>This route can assign comment to an action with specific id.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/comments/1122233621/515265515522",
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
            "type": "Schema.Types.ObjectId",
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
            "field": "UnexpectedToken",
            "description": "<p>The user has some parameters with uncorrect type</p>"
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
          "content": "\n  <h1>Unexpected token j</h1>\n<h2>400</h2>\n<pre>SyntaxError: Unexpected token j",
          "type": "json"
        },
        {
          "title": "Response (Validation Error):",
          "content": "{\n  \"message\": \"Comment validation failed\",\n  \"name\": \"ValidationError\",\n  \"errors\": {\n    \"user\": {\n      \"properties\": {\n        \"type\": \"required\",\n        \"message\": \"Path `{PATH}` is required.\",\n        \"path\": \"user\"\n      },\n      \"message\": \"Path `user` is required.\",\n      \"name\": \"ValidatorError\",\n      \"kind\": \"required\",\n      \"path\": \"user\"\n    },\n    \"description\": {\n      \"properties\": {\n        \"type\": \"required\",\n        \"message\": \"Path `{PATH}` is required.\",\n        \"path\": \"description\"\n      },\n      \"message\": \"Path `description` is required.\",\n      \"name\": \"ValidatorError\",\n      \"kind\": \"required\",\n      \"path\": \"description\"\n    },\n    \"date_created\": {\n      \"properties\": {\n        \"type\": \"required\",\n        \"message\": \"Path `{PATH}` is required.\",\n        \"path\": \"date_created\"\n      },\n      \"message\": \"Path `date_created` is required.\",\n      \"name\": \"ValidatorError\",\n      \"kind\": \"required\",\n      \"path\": \"date_created\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/comments.js",
    "groupTitle": "Comments"
  },
  {
    "type": "put",
    "url": "/comments/:id",
    "title": "Modify a comment",
    "version": "0.0.0",
    "name": "PutComment",
    "group": "Comments",
    "description": "<p>This route can modify a specific comment with id.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/comments/56dbf15c1ed727f82d272ce2",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Comments-ID.</p>"
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
            "field": "NotFound",
            "description": "<p>There are not comment with this id</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotValid",
            "description": "<p>The request is not valid</p>"
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
          "title": "Response (Not Found):",
          "content": "\nuser not found",
          "type": "json"
        },
        {
          "title": "Response (Not Valid):",
          "content": "\n{\n  \"message\": \"Cast to ObjectId failed for value \\\"null=56dae5ce12916cf4357035c6\\\" at path \\\"_id\\\"\",\n  \"name\": \"CastError\",\n  \"kind\": \"ObjectId\",\n  \"value\": \"null=56dae5ce12916cf4357035c6\",\n  \"path\": \"_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/comments.js",
    "groupTitle": "Comments"
  },
  {
    "type": "post",
    "url": "/issues/:id/actions",
    "title": "Create an action",
    "version": "0.0.0",
    "name": "CreateAction",
    "group": "Issues",
    "description": "<p>add an action to issue with id</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/issues/4177/actions",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Issue-ID.</p>"
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
            "description": "<p>The Issue-ID.</p>"
          },
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
    "type": "post",
    "url": "/issues/:id/comments",
    "title": "Create a comment",
    "version": "0.0.0",
    "name": "CreateComment",
    "group": "Issues",
    "description": "<p>add a comment to issue with id</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/issues/4177/comments",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Issue-ID.</p>"
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
            "description": "<p>The Issue-ID.</p>"
          },
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Issue-ID.</p>"
          },
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
    "type": "post",
    "url": "/issues/:id/tags",
    "title": "Create a tag",
    "version": "0.0.0",
    "name": "CreateTag",
    "group": "Issues",
    "description": "<p>add a tag to issue with id</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/issues/4177/tags",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Issue-ID.</p>"
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
            "description": "<p>The Issue-ID.</p>"
          },
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Issue-ID.</p>"
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
            "description": "<p>The Issue-ID.</p>"
          },
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Issue-ID.</p>"
          },
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Issue-ID.</p>"
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
            "description": "<p>The Issue-ID.</p>"
          },
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
    "url": "/issues/status",
    "title": "Get status",
    "version": "0.0.0",
    "name": "GetIssuesStatus",
    "group": "Issues",
    "description": "<p>get all issues with specific status</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/issues/status",
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Issue-ID.</p>"
          },
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
            "field": "NotFound",
            "description": "<p>There are not comments</p>"
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
          "title": "Response (Not Found):",
          "content": "\n[]",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/issues.js",
    "groupTitle": "Issues"
  },
  {
    "type": "post",
    "url": "issues/:id_issue/comments",
    "title": "Create a comment",
    "version": "0.0.0",
    "name": "PostIssueComment",
    "group": "Issues",
    "description": "<p>it's function can create a comment for an issue</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/issues/4711/comments",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Issue-ID.</p>"
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
            "description": "<p>The Issue-ID.</p>"
          },
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
    "type": "put",
    "url": "/issues/:id",
    "title": "Put an issue with the id",
    "version": "0.0.0",
    "name": "PutIssue",
    "group": "Issues",
    "description": "<p>it's function can modify an issue with his id</p>",
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Issue-ID.</p>"
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
            "description": "<p>The Issue-ID.</p>"
          },
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
    "url": "/users/:id",
    "title": "Delete one user",
    "version": "0.0.0",
    "name": "DeleteUser",
    "group": "Users",
    "description": "<p>This route can delete a specific user based on id.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/users/56ced66daa89b1aa47ed6a46",
        "type": "json"
      }
    ],
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>There are not user with this id</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotValid",
            "description": "<p>The request is not valid</p>"
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
          "title": "Response (Not Found):",
          "content": "\nuser not found",
          "type": "json"
        },
        {
          "title": "Response (Not Valid):",
          "content": "\n{\n  \"message\": \"Cast to ObjectId failed for value \\\"null=56dae5ce12916cf4357035c6\\\" at path \\\"_id\\\"\",\n  \"name\": \"CastError\",\n  \"kind\": \"ObjectId\",\n  \"value\": \"null=56dae5ce12916cf4357035c6\",\n  \"path\": \"_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get one user",
    "version": "0.0.0",
    "name": "GetUser",
    "group": "Users",
    "description": "<p>This route can gets a specific user based on id.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/users/56ced66daa89b1aa47ed6a46",
        "type": "json"
      }
    ],
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
            "description": "<p>true if the user is a citizen false if not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "staff",
            "description": "<p>true if the user is a staff false if not.</p>"
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
            "field": "NotFound",
            "description": "<p>There are not user with this id</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotValid",
            "description": "<p>The request is not valid</p>"
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
          "title": "Response (Not Found):",
          "content": "\nuser not found",
          "type": "json"
        },
        {
          "title": "Response (Not Valid):",
          "content": "\n{\n  \"message\": \"Cast to ObjectId failed for value \\\"null=56dae5ce12916cf4357035c6\\\" at path \\\"_id\\\"\",\n  \"name\": \"CastError\",\n  \"kind\": \"ObjectId\",\n  \"value\": \"null=56dae5ce12916cf4357035c6\",\n  \"path\": \"_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/citizens",
    "title": "Get all citizens",
    "version": "0.0.0",
    "name": "GetUserCitizen",
    "group": "Users",
    "description": "<p>This route can get all user how are citizen (with boolean citizen true).</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/users/citizens",
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
            "field": "username",
            "description": "<p>The username of the user.</p>"
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
            "description": "<p>true if the user is a citizen false if not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "staff",
            "description": "<p>true if the user is a staff false if not.</p>"
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
            "field": "NotFound",
            "description": "<p>There are not users with this parameters</p>"
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
          "title": "Response (Not Found):",
          "content": "\n[]",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:id/issues",
    "title": "Get all issues",
    "version": "0.0.0",
    "name": "GetUserIssues",
    "group": "Users",
    "description": "<p>This route can gets a specific user based on id with his issues.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/users/56ced66daa89b1aa47ed6a46/issues",
        "type": "json"
      }
    ],
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
            "description": "<p>true if the user is a citizen false if not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "staff",
            "description": "<p>true if the user is a staff false if not.</p>"
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
            "field": "NotFound",
            "description": "<p>There are not user with this id</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotValid",
            "description": "<p>The request is not valid</p>"
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
          "title": "Response (Not Found):",
          "content": "\nuser not found",
          "type": "json"
        },
        {
          "title": "Response (Not Valid):",
          "content": "\n{\n  \"message\": \"Cast to ObjectId failed for value \\\"null=56dae5ce12916cf4357035c6\\\" at path \\\"_id\\\"\",\n  \"name\": \"CastError\",\n  \"kind\": \"ObjectId\",\n  \"value\": \"null=56dae5ce12916cf4357035c6\",\n  \"path\": \"_id\"\n}",
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
    "title": "Get all staffs",
    "version": "0.0.0",
    "name": "GetUserStaff",
    "group": "Users",
    "description": "<p>This route can get all user how are staff (with boolean staff true).</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/users/staffs",
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
            "field": "username",
            "description": "<p>The username of the user.</p>"
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
            "description": "<p>true if the user is a citizen false if not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "staff",
            "description": "<p>true if the user is a staff false if not.</p>"
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
            "field": "NotFound",
            "description": "<p>There are not users with this parameters</p>"
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
          "title": "Response (Not Found):",
          "content": "[]",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get all users",
    "version": "0.0.0",
    "name": "GetUsers",
    "group": "Users",
    "description": "<p>This route can get all users.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/users",
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
            "field": "username",
            "description": "<p>The username of the user.</p>"
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
            "description": "<p>true if the user is a citizen false if not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "staff",
            "description": "<p>true if the user is a staff false if not.</p>"
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
            "field": "NotFound",
            "description": "<p>There are not users</p>"
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
          "title": "Response (Not Found):",
          "content": "\n[]",
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
    "description": "<p>This route can create a news user with status staff or not.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/users",
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
            "field": "username",
            "description": "<p>The username of the user.</p>"
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
            "description": "<p>true if the user is a citizen false if not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "staff",
            "description": "<p>true if the user is a staff false if not.</p>"
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
            "field": "UnexpectedToken",
            "description": "<p>The user has some parameters with uncorrect type</p>"
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
          "content": "\n  <h1>Unexpected token j</h1>\n<h2>400</h2>\n<pre>SyntaxError: Unexpected token j",
          "type": "json"
        },
        {
          "title": "Response (Validation Error):",
          "content": "  <h1>Unexpected token j</h1>\n<h2>400</h2>\n<pre>SyntaxError: Unexpected token j",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update user",
    "version": "0.0.0",
    "name": "PutUser",
    "group": "Users",
    "description": "<p>This route can updates a specific user based on id.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/users/56ced66daa89b1aa47ed6a46",
        "type": "json"
      }
    ],
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
            "description": "<p>true if the user is a citizen false if not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "staff",
            "description": "<p>true if the user is a staff false if not.</p>"
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
            "field": "NotFound",
            "description": "<p>There are not user with this id</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotValid",
            "description": "<p>The request is not valid</p>"
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
          "title": "Response (Not Found):",
          "content": "\nuser not found",
          "type": "json"
        },
        {
          "title": "Response (Not Valid):",
          "content": "\n{\n  \"message\": \"Cast to ObjectId failed for value \\\"null=56dae5ce12916cf4357035c6\\\" at path \\\"_id\\\"\",\n  \"name\": \"CastError\",\n  \"kind\": \"ObjectId\",\n  \"value\": \"null=56dae5ce12916cf4357035c6\",\n  \"path\": \"_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/users.js",
    "groupTitle": "Users"
  }
] });
