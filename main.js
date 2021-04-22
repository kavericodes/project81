canvas =
 document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");

 ctx.beginpath();
 ctx.strokeStyle = "grey";
 ctx.lineWidth = 4;
 ctx.rect(150, 143, 430, 200 );
 ctx.stroke();

 ctx.beginpath();
 ctx.strokeStyle = "blue";
 ctx.lineWidth = 5;
 ctx.arc(250, 210, 40, 0, 2 * Math.PI);
 ctx.stroke();

 ctx.beginpath();
 ctx.strokeStyle = "black";
 ctx.lineWidth = 5;
 ctx.arc(330, 210, 40, 0, 2 * Math.PI);
 ctx.stroke();

ctx.beginpath();
 ctx.strokeStyle = "red";
 ctx.lineWidth = 5;
 ctx.arc(410, 210, 40, 0, 2 * Math.PI);
 ctx.stroke();

 ctx.beginpath();
 ctx.strokeStyle = "yellow";
 ctx.lineWidth = 5;
 ctx.arc(290, 250, 40, 0, 2 * Math.PI);
 ctx.stroke();

 ctx.beginpath();
 ctx.strokeStyle = "green";
 ctx.lineWidth = 5;
 ctx.arc(370, 250, 40, 0, 2 * Math.PI);
 ctx.stroke();
