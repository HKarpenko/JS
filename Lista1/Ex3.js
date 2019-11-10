function fibIt(num){
    var fib1=0;
    var fib2=1;
    if(num==0)
        return fib1;
    if(num==1)
        return fib2;
    for(var i=2;i<=num;i++){
        fib2+=fib1;
        fib1=fib2-fib1;
    }
    return fib2;
}

function fibRec(num){
    if(num==0)
        return 0;
    if(num==1)
        return 1;
    return fibRec(num-1)+fibRec(num-2);
}

for(i=10;i<=40;i++){
    console.log(i+":");
    console.time('ItMeth');
    fibIt(i);
    console.timeEnd('ItMeth');
    console.time('RecMeth');
    fibRec(i);
    console.timeEnd('RecMeth');
}
    
/*Opera
first:24 10:
first:27 ItMeth: 0.113037109375ms
first:30 RecMeth: 0.101806640625ms
first:24 11:
first:27 ItMeth: 0.006103515625ms
first:30 RecMeth: 0.03271484375ms
first:24 12:
first:27 ItMeth: 0.0048828125ms
first:30 RecMeth: 0.046142578125ms
first:24 13:
first:27 ItMeth: 0.004150390625ms
first:30 RecMeth: 0.06689453125ms
first:24 14:
first:27 ItMeth: 0.005126953125ms
first:30 RecMeth: 0.11669921875ms
first:24 15:
first:27 ItMeth: 0.005859375ms
first:30 RecMeth: 0.221923828125ms
first:24 16:
first:27 ItMeth: 0.00732421875ms
first:30 RecMeth: 0.22216796875ms
first:24 17:
first:27 ItMeth: 0.00390625ms
first:30 RecMeth: 0.94921875ms
first:24 18:
first:27 ItMeth: 0.0068359375ms
first:30 RecMeth: 0.2529296875ms
first:24 19:
first:27 ItMeth: 0.005859375ms
first:30 RecMeth: 0.123046875ms
first:24 20:
first:27 ItMeth: 0.005126953125ms
first:30 RecMeth: 0.237060546875ms
first:24 21:
first:27 ItMeth: 0.005859375ms
first:30 RecMeth: 0.475830078125ms
first:24 22:
first:27 ItMeth: 0.005126953125ms
first:30 RecMeth: 0.727294921875ms
first:24 23:
first:27 ItMeth: 0.005859375ms
first:30 RecMeth: 0.67919921875ms
first:24 24:
first:27 ItMeth: 0.006103515625ms
first:30 RecMeth: 1.116943359375ms
first:24 25:
first:27 ItMeth: 0.005859375ms
first:30 RecMeth: 2.1669921875ms
first:24 26:
first:27 ItMeth: 0.005859375ms
first:30 RecMeth: 4.2841796875ms
first:24 27:
first:27 ItMeth: 0.005859375ms
first:30 RecMeth: 5.635986328125ms
first:24 28:
first:27 ItMeth: 0.006103515625ms
first:30 RecMeth: 10.241943359375ms
first:24 29:
first:27 ItMeth: 0.005859375ms
first:30 RecMeth: 11.98388671875ms
first:24 30:
first:27 ItMeth: 0.008056640625ms
first:30 RecMeth: 26.635009765625ms
first:24 31:
first:27 ItMeth: 0.010009765625ms
first:30 RecMeth: 42.91796875ms
first:24 32:
first:27 ItMeth: 0.00830078125ms
first:30 RecMeth: 60.8349609375ms
first:24 33:
first:27 ItMeth: 0.0068359375ms
first:30 RecMeth: 84.97998046875ms
first:24 34:
first:27 ItMeth: 0.04296875ms
first:30 RecMeth: 121.0791015625ms
first:24 35:
first:27 ItMeth: 0.007080078125ms
first:30 RecMeth: 196.82080078125ms
first:24 36:
first:27 ItMeth: 0.009033203125ms
first:30 RecMeth: 314.066162109375ms
first:24 37:
first:27 ItMeth: 0.008056640625ms
first:30 RecMeth: 509.159912109375ms
first:24 38:
first:27 ItMeth: 0.008056640625ms
first:30 RecMeth: 826.1630859375ms
first:24 39:
first:27 ItMeth: 0.0068359375ms
first:30 RecMeth: 1331.43798828125ms
first:24 40:
first:27 ItMeth: 0.0078125ms
first:30 RecMeth: 2142.683837890625ms
*/

/*Chrome:
10:
first:27 ItMeth: 0.091064453125ms
first:30 RecMeth: 0.090087890625ms
first:24 11:
first:27 ItMeth: 0.02783203125ms
first:30 RecMeth: 0.056884765625ms
first:24 12:
first:27 ItMeth: 0.0087890625ms
first:30 RecMeth: 0.057861328125ms
first:24 13:
first:27 ItMeth: 0.007080078125ms
first:30 RecMeth: 0.08984375ms
first:24 14:
first:27 ItMeth: 0.024169921875ms
first:30 RecMeth: 0.1572265625ms
first:24 15:
first:27 ItMeth: 0.007080078125ms
first:30 RecMeth: 1.61474609375ms
first:24 16:
first:27 ItMeth: 0.00830078125ms
first:30 RecMeth: 0.44482421875ms
first:24 17:
first:27 ItMeth: 0.009033203125ms
first:30 RecMeth: 0.39697265625ms
first:24 18:
first:27 ItMeth: 0.005859375ms
first:30 RecMeth: 0.09619140625ms
first:24 19:
first:27 ItMeth: 0.005126953125ms
first:30 RecMeth: 0.141845703125ms
first:24 20:
first:27 ItMeth: 0.0048828125ms
first:30 RecMeth: 0.25ms
first:24 21:
first:27 ItMeth: 0.0068359375ms
first:30 RecMeth: 0.381103515625ms
first:24 22:
first:27 ItMeth: 0.005859375ms
first:30 RecMeth: 0.61328125ms
first:24 23:
first:27 ItMeth: 0.006103515625ms
first:30 RecMeth: 0.976318359375ms
first:24 24:
first:27 ItMeth: 0.005859375ms
first:30 RecMeth: 1.644775390625ms
first:24 25:
first:27 ItMeth: 0.006103515625ms
first:30 RecMeth: 2.559814453125ms
first:24 26:
first:27 ItMeth: 0.00732421875ms
first:30 RecMeth: 4.14306640625ms
first:24 27:
first:27 ItMeth: 0.008056640625ms
first:30 RecMeth: 6.87890625ms
first:24 28:
first:27 ItMeth: 0.0068359375ms
first:30 RecMeth: 8.444091796875ms
first:24 29:
first:27 ItMeth: 0.005859375ms
first:30 RecMeth: 19.1162109375ms
first:24 30:
first:27 ItMeth: 0.0068359375ms
first:30 RecMeth: 30.93701171875ms
first:24 31:
first:27 ItMeth: 0.0068359375ms
first:30 RecMeth: 52.135009765625ms
first:24 32:
first:27 ItMeth: 0.006103515625ms
first:30 RecMeth: 63.10791015625ms
first:24 33:
first:27 ItMeth: 0.0078125ms
first:30 RecMeth: 100.833740234375ms
first:24 34:
first:27 ItMeth: 0.008056640625ms
first:30 RecMeth: 145.41796875ms
first:24 35:
first:27 ItMeth: 0.007080078125ms
first:30 RecMeth: 197.340087890625ms
first:24 36:
first:27 ItMeth: 0.0078125ms
first:30 RecMeth: 392.073974609375ms
first:24 37:
first:27 ItMeth: 0.008056640625ms
first:30 RecMeth: 562.4150390625ms
first:24 38:
first:27 ItMeth: 0.01806640625ms
first:30 RecMeth: 1056.1728515625ms
first:24 39:
first:27 ItMeth: 0.02197265625ms
first:30 RecMeth: 1472.343017578125ms
first:24 40:
first:27 ItMeth: 0.009033203125ms
first:30 RecMeth: 2300.858154296875ms
*/


