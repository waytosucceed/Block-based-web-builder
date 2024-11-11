// blocks/js_blocks.js

// Variable declaration block
Blockly.Blocks['js_variable_declare'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("var") // Label for the block
      .appendField(new Blockly.FieldTextInput("myVar"), "VAR")// Input for variable name
      .appendField(new Blockly.FieldTextInput(''), 'VALUE')// Input for variable value

    this.setPreviousStatement(true); // Allow connecting to previous blocks
    this.setNextStatement(true); // Allow connecting to next blocks
    this.setColour('#F85E00'); // Set block color
    this.setTooltip("Declare a variable."); // Tooltip for the block
    this.setHelpUrl(""); // Help URL if needed
  }
};

// JavaScript Code Generator for the js_variable_declare block
Blockly.JavaScript['js_variable_declare'] = function (block) {
  var variable = block.getFieldValue('VAR'); // Get the variable name input
  var value = block.getFieldValue('VALUE') || '0'; // Get the value input
  var code = 'var ' + variable + ' = ' + value + ';\n'; // Generate the JavaScript code
  return code; // Return the generated code
};




Blockly.Blocks['js_event_listener'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('document.getElementById("')
      .appendField(new Blockly.FieldTextInput("btn"), "ELEMENT_ID") // Input for button ID
      .appendField('"').appendField(').addEventListener("')
      .appendField(new Blockly.FieldDropdown([
        ["click", "click"],
        ["mouseover", "mouseover"],
        ["mouseout", "mouseout"]
      ]), "EVENT")// Dropdown for event type
      .appendField('"),function(){')
    this.appendStatementInput("DO") // Allow nested blocks for the action
      .setCheck(null); // Accept any type of blocks
    this.appendDummyInput()
      .appendField('});'); // Closing brace for event listener function
    this.setColour('#F85E00'); // Set block color
    this.setTooltip("Add an event listener to an element."); // Tooltip
    this.setHelpUrl(""); // Help URL
    this.setPreviousStatement(true); // Allow connection to previous blocks
    this.setNextStatement(true); // Allow connection to next blocks
  }
};

Blockly.JavaScript['js_if_else'] = function (block) {
  var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
  var doStatements = Blockly.JavaScript.statementToCode(block, 'DO');
  var elseStatements = Blockly.JavaScript.statementToCode(block, 'ELSE');
  var code = `if (${condition}) {\n${doStatements}\n} else {\n${elseStatements}\n}\n`;
  return code;
};

Blockly.JavaScript['js_http_get'] = function (block) {
  var url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ATOMIC) || '""';
  var code = `fetch(${url})\n  .then(response => response.json())\n  .then(data => console.log(data));\n`;
  return code;
};
Blockly.JavaScript['js_for_loop'] = function (block) {
  var variable = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var start = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var end = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ASSIGNMENT) || '10';
  var step = Blockly.JavaScript.valueToCode(block, 'STEP', Blockly.JavaScript.ORDER_ASSIGNMENT) || '1';
  var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
  var code = `for (var ${variable} = ${start}; ${variable} < ${end}; ${variable} += ${step}) {\n${statements_do}}\n`;
  return code;
};

// Define the js_alert block
Blockly.Blocks['js_alert'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("alert(")
      .appendField(new Blockly.FieldTextInput('Hello Coder!'), 'MESSAGE')
      .appendField(")"); // Close the alert function call

    this.setPreviousStatement(true); // Allow connecting to previous blocks
    this.setNextStatement(true); // Allow connecting to next blocks
    this.setColour('#F85E00'); // Set block color
    this.setTooltip("Show an alert"); // Tooltip for the block
    this.setHelpUrl(""); // Help URL if needed
  }
};

// Generate JavaScript code for the js_alert block
Blockly.JavaScript['js_alert'] = function (block) {
  var message = block.getFieldValue('MESSAGE'); // Get the message input
  var code = 'alert("' + message + '");\n'; // Generate the JavaScript code for the alert
  return code; // Return the code to be included in the generated script
};

// Generate JavaScript code for the event listener block
Blockly.JavaScript['js_event_listener'] = function (block) {
  var elementId = block.getFieldValue('ELEMENT_ID'); // Get the element ID
  var eventType = block.getFieldValue('EVENT'); // Get the event type
  var statements_do = Blockly.JavaScript.statementToCode(block, 'DO'); // Get the statements inside the block

  // Generate the event listener code without quotes around the getElementById
  var code = 'document.getElementById("' + elementId + '").addEventListener("' + eventType + '", function() {\n' + statements_do + '});\n';
  return code; // Return the code
};

Blockly.Blocks['js_event_listenerDOMContentLoaded'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("document.addEventListener('DOMContentLoaded'")
      .appendField(", function() {\n"); // Start the event listener block
    this.appendStatementInput("DO") // Allow nested blocks for the action
      .setCheck(null); // Accept any type of blocks
    this.appendDummyInput()
      .appendField("});"); // Close the event listener block
    this.setPreviousStatement(true); // Allow connection to previous blocks
    this.setColour('#F85E00'); // Set block color
    this.setTooltip("Execute code when the DOM is fully loaded."); // Tooltip
    this.setHelpUrl(""); // Help URL
    this.setNextStatement(true); // Allow connection to next blocks
  }
};

Blockly.JavaScript['js_event_listenerDOMContentLoaded'] = function (block) {
  const statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
  const code = `document.addEventListener('DOMContentLoaded', function() {\n${statements_do}\n});\n`;
  return code;
};
// Console log block
Blockly.Blocks['js_console_log'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("console.log(")// Label for the block
      .appendField(new Blockly.FieldTextInput('Hello Coder!'), 'TEXT')// Input 
      .appendField(')');
    // Label to clarify input
    this.setPreviousStatement(true); // Allow connecting to previous blocks
    this.setNextStatement(true); // Allow connecting to next blocks
    this.setColour('#F85E00'); // Set block color
    this.setTooltip("Log a message to the console."); // Tooltip for the block
    this.setHelpUrl(""); // Help URL if needed
  }
};

// JavaScript Code Generator for the js_console_log block
Blockly.JavaScript['js_console_log'] = function (block) {
  var text = block.getFieldValue('TEXT') || '""'; // Get the log message input
  var code = 'console.log(' + text + ');\n'; // Generate the JavaScript code
  return code; // Return the generated code
};

// Function definition block
Blockly.Blocks['js_function'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("function") // Label for the block
      .appendField(new Blockly.FieldTextInput("myFunction"), "NAME")// Input for function name
      .appendField("() {"); // Label for the parameter list

    this.appendStatementInput('CONTENT')
      .setCheck(null)

    this.appendDummyInput()
      .appendField('}')     // Label for the closing brace

    this.setColour('#F85E00'); // Set block color
    this.setTooltip("Define a JavaScript function."); // Tooltip for the block
    this.setHelpUrl(""); // Help URL if needed
    this.setPreviousStatement(true); // Allow connecting to previous blocks
    this.setNextStatement(true); // Allow connecting to next blocks
  }
};

// JavaScript Code Generator for the js_function block
Blockly.JavaScript['js_function'] = function (block) {
  var functionName = block.getFieldValue('NAME'); // Get the function name input
  var statements_do = Blockly.JavaScript.statementToCode(block, 'CONTENT'); // Get the statements inside the function
  var code = 'function ' + functionName + '() {\n' + statements_do + '}\n'; // Generate the JavaScript code
  return code; // Return the generated code
};

// If-Else block
Blockly.Blocks['js_if_else'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("if"); // Label for the if statement
    this.appendValueInput("CONDITION") // Input for the condition
      .setCheck("Boolean"); // Check type is Boolean
    this.appendStatementInput("DO") // Statement input for the if block
      .appendField(""); // Label for the action if condition is true
    this.appendDummyInput()
      .appendField("else"); // Label for the else statement
    this.appendStatementInput("ELSE") // Statement input for the else block
      .appendField(""); // Label for the action if condition is false
    this.setColour('#F85E00'); // Set block color
    this.setTooltip("If-Else condition."); // Tooltip for the block
    this.setHelpUrl(""); // Help URL if needed
    this.setPreviousStatement(true); // Allow connection to previous blocks
    this.setNextStatement(true); // Allow connection to next blocks
  }
};

// JavaScript Code Generator for the js_if_else block
Blockly.JavaScript['js_if_else'] = function (block) {
  var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC) || 'false'; // Get the condition input
  var doStatements = Blockly.JavaScript.statementToCode(block, 'DO'); // Get statements for the if part
  var elseStatements = Blockly.JavaScript.statementToCode(block, 'ELSE'); // Get statements for the else part
  var code = `if (${condition}) {\n${doStatements}\n} else {\n${elseStatements}\n}\n`; // Generate the JavaScript code
  return code; // Return the generated code
};

// For loop block
// Traditional for loop block
Blockly.Blocks['js_for_loop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("for (let") // Label for the "for" loop, initializing with "let"
      .appendField(new Blockly.FieldVariable("i"), "VAR") // Variable field with default "i"
      .appendField("="); // Equal sign for variable initialization
    this.appendValueInput("START") // Input for the starting value
      .setCheck("Number"); // Ensure it's a number
    this.appendDummyInput()
      .appendField(";") // Semicolon to separate parts of the for loop
      .appendField(new Blockly.FieldVariable("i"), "VAR") // Re-use variable field
      .appendField("<"); // Less-than symbol for condition (can be updated for step direction)
    this.appendValueInput("END") // Input for the ending value
      .setCheck("Number"); // Ensure it's a number
    this.appendDummyInput()
      .appendField(";") // Another semicolon
      .appendField(new Blockly.FieldVariable("i"), "VAR") // Re-use variable field
      .appendField("+="); // Increment step
    this.appendValueInput("STEP") // Input for the step value
      .setCheck("Number"); // Ensure it's a number
    this.appendDummyInput()
      .appendField(") {"); // Closing the "for" part
    this.appendStatementInput("DO") // Statement input for the loop body
      .appendField("do"); // Label for the action inside the loop
    this.appendDummyInput()
      .appendField("}"); // Closing brace for the loop
    this.setPreviousStatement(true, null); // Allow connection to previous blocks
    this.setNextStatement(true, null); // Allow connection to next blocks
    this.setColour('#F85E00'); // Set block color
    this.setTooltip("Traditional for loop in JavaScript."); // Tooltip for the block
    this.setHelpUrl(""); // Help URL if needed
  }
};

Blockly.JavaScript['js_for_loop'] = function (block) {
  // Retrieve the variable name specified by the user
  var variable = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);

  // Retrieve the values for start, end, and step
  var start = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var end = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ASSIGNMENT) || '10';
  var step = Blockly.JavaScript.valueToCode(block, 'STEP', Blockly.JavaScript.ORDER_ASSIGNMENT) || '1';

  // Retrieve the statements to be executed inside the loop
  var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');

  // Generate the traditional JavaScript for loop code
  var code = `for (let ${variable} = ${start}; ${variable} < ${end}; ${variable} += ${step}) {\n${statements_do}}\n`;
  return code; // Return the generated code
};

// Block for generating numbers
Blockly.Blocks['number_input'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldNumber(0), "NUM"); // Default number is 0
    this.setOutput(true, "Number"); // Outputs a number
    this.setColour('#F85E00'); // Set block color
    this.setTooltip("Number input."); // Tooltip for the block
    this.setHelpUrl(""); // Help URL if needed
  }
};

Blockly.JavaScript['number_input'] = function (block) {
  var number = block.getFieldValue('NUM'); // Get the number from the block
  var code = number; // Use the number as the code
  return [code, Blockly.JavaScript.ORDER_ATOMIC]; // Return the number with proper precedence
};

// While loop block
Blockly.Blocks['js_while_loop'] = {
  init: function () {
    this.appendDummyInput().appendField("while");
    this.appendValueInput("CONDITION").setCheck("Boolean").appendField("(");
    this.appendDummyInput().appendField(")");
    this.appendStatementInput("DO").setCheck(null).appendField("{");
    this.appendDummyInput().appendField("}");
    this.setColour('#F85E00');
    this.setTooltip("While loop.");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['js_while_loop'] = function (block) {
  const condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
  const statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
  return `while (${condition}) {\n${statements_do}}\n`;
};

// Function call block
Blockly.Blocks['js_function_call'] = {
  init: function () {
    this.appendDummyInput().appendField("call function").appendField(new Blockly.FieldTextInput("myFunction"), "FUNCTION_NAME");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#F85E00');
    this.setTooltip("Call a defined function.");
  }
};

Blockly.JavaScript['js_function_call'] = function (block) {
  const functionName = block.getFieldValue('FUNCTION_NAME');
  return `${functionName}();\n`;
};

// Arithmetic operations block
Blockly.Blocks['js_arithmetic'] = {
  init: function () {
    this.appendValueInput("A").setCheck("Number");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["+", "+"], ["-", "-"], ["*", "*"], ["/", "/"]]), "OPERATOR");
    this.appendValueInput("B").setCheck("Number");
    this.setOutput(true, "Number");
    this.setColour('#F85E00');
    this.setTooltip("Performs arithmetic operations.");
  }
};

Blockly.JavaScript['js_arithmetic'] = function (block) {
  const operator = block.getFieldValue('OPERATOR');
  const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  return [`${a} ${operator} ${b}`, Blockly.JavaScript.ORDER_ATOMIC];
};

// Logical operations block
Blockly.Blocks['js_logical'] = {
  init: function () {
    this.appendValueInput("A").setCheck("Boolean");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["AND", "&&"], ["OR", "||"]]), "OPERATOR");
    this.appendValueInput("B").setCheck("Boolean");
    this.setOutput(true, "Boolean");
    this.setColour('#F85E00');
    this.setTooltip("Performs logical operations.");
  }
};

Blockly.JavaScript['js_logical'] = function (block) {
  const operator = block.getFieldValue('OPERATOR');
  const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
  const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
  return [`${a} ${operator} ${b}`, Blockly.JavaScript.ORDER_ATOMIC];
};

// Comparison block
Blockly.Blocks['js_compare'] = {
  init: function () {
    this.appendValueInput("A").setCheck("Number");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["=", "=="], ["!=", "!="], ["<", "<"], [">", ">"], ["<=", "<="], [">=", ">="]]), "OPERATOR");
    this.appendValueInput("B").setCheck("Number");
    this.setOutput(true, "Boolean");
    this.setColour('#F85E00');
    this.setTooltip("Performs comparison operations.");
  }
};

Blockly.JavaScript['js_compare'] = function (block) {
  const operator = block.getFieldValue('OPERATOR');
  const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  return [`${a} ${operator} ${b}`, Blockly.JavaScript.ORDER_ATOMIC];
};

// Return block
Blockly.Blocks['js_return'] = {
  init: function () {
    this.appendValueInput("RETURN").appendField("return");
    this.setPreviousStatement(true);
    this.setColour('#F85E00');
    this.setTooltip("Return a value from a function.");
  }
};

Blockly.JavaScript['js_return'] = function (block) {
  const value = Blockly.JavaScript.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return `return ${value};\n`;
};

// Set Timeout block
Blockly.Blocks['js_set_timeout'] = {
  init: function () {
    this.appendValueInput("TIME").setCheck("Number").appendField("setTimeout(function() {");
    this.appendStatementInput("DO");
    this.appendDummyInput().appendField("},").appendField(new Blockly.FieldTextInput("1000"), "TIMEOUT").appendField("ms);");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#F85E00');
    this.setTooltip("Execute code after a delay.");
  }
};

Blockly.JavaScript['js_set_timeout'] = function (block) {
  const statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC) || '1000';
  return `setTimeout(function() {\n${statements_do}}, ${time});\n`;
};

// Set Interval block
Blockly.Blocks['js_set_interval'] = {
  init: function () {
    this.appendValueInput("TIME").setCheck("Number").appendField("setInterval(function() {");
    this.appendStatementInput("DO");
    this.appendDummyInput().appendField("},").appendField(new Blockly.FieldTextInput("1000"), "INTERVAL").appendField("ms);");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#F85E00');
    this.setTooltip("Execute code at regular intervals.");
  }
};

Blockly.JavaScript['js_set_interval'] = function (block) {
  const statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC) || '1000';
  return `setInterval(function() {\n${statements_do}}, ${time});\n`;
};

// Array creation block
Blockly.Blocks['js_array'] = {
  init: function () {
    this.appendDummyInput().appendField("create array").appendField(new Blockly.FieldTextInput("item1, item2"), "ITEMS");
    this.setOutput(true, "Array");
    this.setColour('#F85E00');
    this.setTooltip("Create an array.");
  }
};

Blockly.JavaScript['js_array'] = function (block) {
  const items = block.getFieldValue('ITEMS').split(',').map(item => item.trim());
  return [`[${items.join(', ')}]`, Blockly.JavaScript.ORDER_ATOMIC];
};

// Array index access block
Blockly.Blocks['js_array_access'] = {
  init: function () {
    this.appendValueInput("ARRAY").setCheck("Array");
    this.appendValueInput("INDEX").setCheck("Number").appendField("[");
    this.appendDummyInput().appendField("]");
    this.setOutput(true);
    this.setColour('#F85E00');
    this.setTooltip("Access array element by index.");
  }
};

Blockly.JavaScript['js_array_access'] = function (block) {
  const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
  const index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  return [`${array}[${index}]`, Blockly.JavaScript.ORDER_ATOMIC];
};

// Array push block
Blockly.Blocks['js_array_push'] = {
  init: function () {
    this.appendValueInput("ARRAY").setCheck("Array").appendField("add to array");
    this.appendValueInput("ITEM").setCheck(null).appendField("value");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#F85E00');
    this.setTooltip("Add element to the end of array.");
  }
};

Blockly.JavaScript['js_array_push'] = function (block) {
  const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
  const item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_ATOMIC) || '""';
  return `${array}.push(${item});\n`;
};

Blockly.Blocks['js_switch'] = {
  init: function () {
    this.appendValueInput("SWITCH").appendField("switch (");
    this.appendDummyInput().appendField(")");
    this.appendStatementInput("CASES").setCheck(null).appendField("");
    this.appendDummyInput().appendField("}");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#F85E00');
    this.setTooltip("Switch case structure.");
  }
};

Blockly.JavaScript['js_switch'] = function (block) {
  const variable = Blockly.JavaScript.valueToCode(block, 'SWITCH', Blockly.JavaScript.ORDER_ATOMIC) || '';
  const cases = Blockly.JavaScript.statementToCode(block, 'CASES');
  return `switch (${variable}) {\n${cases}}\n`;
};

Blockly.Blocks['js_case'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("case")
      .appendField(new Blockly.FieldTextInput("value"), "VALUE")
      .appendField(":");

    this.appendStatementInput("DO")
      .setCheck(null)
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#F85E00');
    this.setTooltip("Defines a case in a switch statement.");
  }
};

Blockly.JavaScript['js_case'] = function (block) {
  const value = block.getFieldValue('VALUE');
  const statements = Blockly.JavaScript.statementToCode(block, 'DO');
  return `case ${value}:\n${statements}`;
};

Blockly.Blocks['js_break'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("break;")
  
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#F85E00');
    this.setTooltip("Defines break statement");
  }
};

Blockly.JavaScript['js_break'] = function (block) {

  return `break;\n`;
};

Blockly.Blocks['js_array_map'] = {
  init: function () {
    this.appendValueInput("ARRAY").setCheck("Array").appendField("map array");
    this.appendStatementInput("DO").setCheck(null).appendField("with function");
    this.setOutput(true, "Array");
    this.setColour('#F85E00');
    this.setTooltip("Map function on array items.");
  }
};

Blockly.JavaScript['js_array_map'] = function (block) {
  const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
  const functionBody = Blockly.JavaScript.statementToCode(block, 'DO');
  return [`${array}.map(function(item) {\n${functionBody}})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['js_array_length'] = {
  init: function () {
    this.appendValueInput("ARRAY").setCheck("Array").appendField("length of array");
    this.setOutput(true, "Number");
    this.setColour('#F85E00');
    this.setTooltip("Get the length of an array.");
  }
};

Blockly.JavaScript['js_array_length'] = function (block) {
  const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
  return [`${array}.length`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.Blocks['js_array_filter'] = {
  init: function () {
    this.appendValueInput("ARRAY").setCheck("Array").appendField("filter array");
    this.appendStatementInput("CONDITION").setCheck("Boolean").appendField("if");
    this.setOutput(true, "Array");
    this.setColour('#F85E00');
    this.setTooltip("Filter items from an array based on a condition.");
  }
};

Blockly.JavaScript['js_array_filter'] = function (block) {
  const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
  const condition = Blockly.JavaScript.statementToCode(block, 'CONDITION');
  return [`${array}.filter(item => ${condition})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['js_json_parse'] = {
  init: function () {
    this.appendValueInput("STRING").setCheck("String").appendField("parse JSON");
    this.setOutput(true, "Object");
    this.setColour('#F85E00');
    this.setTooltip("Parse a JSON string into an object.");
  }
};

Blockly.JavaScript['js_json_parse'] = function (block) {
  const jsonString = Blockly.JavaScript.valueToCode(block, 'STRING', Blockly.JavaScript.ORDER_ATOMIC) || '""';
  return [`JSON.parse(${jsonString})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['js_json_stringify'] = {
  init: function () {
    this.appendValueInput("OBJECT").setCheck("Object").appendField("stringify JSON");
    this.setOutput(true, "String");
    this.setColour('#F85E00');
    this.setTooltip("Convert an object to a JSON string.");
  }
};

Blockly.JavaScript['js_json_stringify'] = function (block) {
  const obj = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
  return [`JSON.stringify(${obj})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
