# aurox-test

1. How to start
    -npm install
    -npm start
    -run on local host
    
    
2. Functionalities
    1. Get from https://api1.binance.com/api/v3/depth the snapshot for the currency I want to stream
    2. After selecting the currency from dropdown, we start consuming events from binance stream (wss://stream.binance.com:9443/ws/)
    3. We can change how many record to see in both tables (buy order and sell order table)
    4. We can select how many decimals should price has (see the price column from both tables how is changed)
    *By default the decimals are set to 2 and the depth is select to 10;
    *the records received through sockets which have quantity = 0 are removed from the final array
    
   
Notes: 
    Some final improvements (Binance api events dropping) can be done in a later stage
    


    
