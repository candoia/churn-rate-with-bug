
# Candoia app: Churn Rate Bug

This app draws churn rate of top 50 files with a column chart.
This churn rate is different to the churn rate app at https://github.com/candoia/churn-rate.
https://github.com/candoia/churn-rate, provides churn rate of files with number of
revisions, while this app provides churn rate of each file with respect to bugs.

This is measuring how frequent a file changes with each bug. In very simple form this can also be
considered as probability of changing files with bugs.

To run, add this app to your Candoia installation.


## Structure of this directory

* main.html: describes visual layout of the app pane in the platform
* main.js: contains glue code for interaction
* churn.boa: contains MSR logic
* package.json: metadata about the app
