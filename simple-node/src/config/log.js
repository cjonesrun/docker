const logging_path = "./log";

const properties = {
  appenders: {
    console: { type: "console", layout: { type: "pattern",
      pattern: "[%d] [%p] [proc:%z] %c - %m" } },
    app: { type: "dateFile", filename: logging_path + "/app.log", pattern: "yyyy-MM-dd" },
    access: { type: "dateFile", filename: logging_path + "/access.log", pattern: "yyyy-MM-dd" },

    exceptions: { type: "dateFile", filename: logging_path + "/error.log", pattern: "yyyy-MM-dd" },
    error: { type: "logLevelFilter", appender: "exceptions", level: "error" }
  },
  categories: {
    default: { appenders: ["app", "error"], level: "trace" },
    access: { appenders: [ "access", "error" ], level: "trace" }
  }
};


module.exports = { 
	properties : properties,
	path : logging_path 
};

