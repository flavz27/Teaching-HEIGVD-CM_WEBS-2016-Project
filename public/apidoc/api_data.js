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
