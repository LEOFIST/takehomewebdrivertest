// JavaScript source code test_import carlton.ashley

import com.browserstack.local.Local;

/// Creates an instance of Local
Local bsLocal = new Local();
  
/// You can also set an environment variable - "BROWSERSTACK_ACCESS_KEY".
HashMap<String, String> bsLocalArgs = new HashMap<String, String>();
  
bsLocalArgs.put("key", "sGbibVQzigMskey8i8xL");
  
/// Starts the Local instance with the required arguments
bsLocal.start(bsLocalArgs);
   
/// Check if BrowserStack local instance is running
System.out.println(bsLocal.isRunning());
  
/// Your test code goes here, from creating the driver instance till the end, i.e. driver.quit
/// Stop the Local instance after your test run is completed, i.e after driver.quit
bsLocal.stop();