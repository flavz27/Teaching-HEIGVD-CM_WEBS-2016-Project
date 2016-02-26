define({ "api": [
  {
    "type": "post",
    "url": "/comments",
    "title": "Create a comment",
    "name": "CreateComment",
    "group": "Comments",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the comment.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
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
    "permission": [
      {
        "name": "admin"
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
    "url": "/issues",
    "title": "Create an issue",
    "name": "CreateIssue",
    "group": "Issues",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the issue.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/issues.js",
    "groupTitle": "Issues"
  }
] });
