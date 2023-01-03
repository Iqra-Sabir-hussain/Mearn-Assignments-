
const use = async () => {
    await User.insertMany(Games);
    let len= await User.count(Games);
    console.log(len);
    
    };
    use().then(() => {
      mongoose.connection.close();
    });
    