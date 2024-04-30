const Conversation = require("../models/conversation.model")




exports.createConversation = async (req, res, next) => {

    const newConversation = new Conversation({
        id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
        sellerId: req.isSeller ? req.userId : req.body.to,
        buyerId: req.isSeller ? req.body.to : req.userId,
        readBySeller: req.isSeller,
        readByBuyer: !req.isSeller,
    });
    try {
        const savedConversation = await newConversation.save();
        res.status(201).send(savedConversation);
    } catch (error) {
        res.status(500).send(error)
    }
}



// ****************************
exports.updateConversation = async (req, res, next) => {
    try {
        const updatedConversation = await Conversation.findOneAndUpdate({ id: req.params.id },
            {
                $set:
                {
                    // readBySeller: req.isSeller,
                    // readByBuyer: !req.isSeller


                    ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
                },
            },


            { new: true }
        );
        res.status(200).send(updatedConversation)
    }
    catch (error) {
        re.status(500).send(error)
    }
}





exports.getSingleConversation = async (req, res, next) => {
    try {
        const conversation = await Conversation.findOne({ id: req.params.id })
        if (!conversation) return res.status(400).send("not found")
        res.status(200).send(conversation).sort({ updatedAt: -1 })
    }
    catch (error) {

        re.status(500).send(error)
    }
}





exports.getConversations = async (req, res, next) => {
    try {
        const conversations = await Conversation.find(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId })
        res.status(200).send(conversations)
    }
    catch (error) {
        re.status(500).send(error)
    }
}