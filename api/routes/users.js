const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");



//Update
router.put("/:id", async (req, res) => {
    if(req.body.userId === req.params.id ){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
    
    try {
        const updatedUser = await User.findByIdAndUpdate
        (req.params.id,
        {
            $set:req.body,
        },
            {new: true}
        );
        return res.status(200).jason(updatedUser)
    } catch (err) {
         res.status(500).json(err);
    }
  } else {
      res.status(401).json("Możesz zaktualizować tylko swoje konto")
  }
});

//Delete
router.delete("/:id", async (req, res) => {
    if(req.body.userId === req.params.id ){
        try{
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({username:user.username});
                await User.findByIdAndDelete(req.params.id);
                return res.status(200).jason("Usunięto użytkownika..");
                } catch (err) {
                res.status(500).json(err);
                }
        } catch(err){
            res.status(404).json("Nie znaleziono użytkownika");
        }
            
  } else {
      res.status(401).json("Możesz usunąć tylko swoje konto")
  };
});

//get user
router.get("/:id", async(req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch(err) {
        res.status(500).json(err)
    }
})

 module.exports = router