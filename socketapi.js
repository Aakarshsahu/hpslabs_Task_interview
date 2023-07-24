const chatModel = require("./routes/users")
const io = require( "socket.io" )();
const socketapi = {
    io: io
};

var onlineuser = [];
var users = {};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log( "A user connected" );
    socket.on("username",function(username){
        users[username] = socket.id;
        io.emit("userList", Object.values(users));
    })
    onlineuser.push(socket.id);
    console.log(onlineuser)
    io.emit("online",onlineuser.length);
    // socket.on("msg",function(data){
        
    //     io.emit("msg",data);
    // })

    
    socket.on("msg",function(data){
        console.log(data)
        // chatModel.create({
        //     user : data.user
        // })
        var userSocketId = users[data.user];
        io.emit("msg", data);
      
    });
    
    
    socket.on("username",function(username){
        socket.emit("username",username)
    })

   
});

// end of socket.io logic
module.exports = socketapi;