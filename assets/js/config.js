require.config({
    paths: {
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
        "bootstrap": "//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min",
        "jquery_ui": "//code.jquery.com/ui/1.9.1/jquery-ui.min",
        "angular": "//ajax.googleapis.com/ajax/libs/angularjs/1.2.10/angular.min"
    },
    shim: {
        "angular": {
            exports : "angular"
        },
        "bootstrap": {
            exports : "$",
            deps: ['jquery']
        },
        "jquery_ui": {
            exports : "$",
            deps: ['jquery']
        }
    }
});