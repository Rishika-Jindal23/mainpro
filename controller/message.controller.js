const Message = require("../models/message.model")
const Conversation = require("../models/conversation.model")






exports.createMessage = async (req, res, next) => {
    const newMessage = new Message({
        conversationId: req.body.conversationId,
        userId: req.userId,
        desc: req.body.desc
    })
    try {
        const savedMessage = await newMessage.save()
        await Conversation.findOneAndUpdate({
            id: req.body.conversationId
        }, {

            $set: {

                readBySeller: req.isSeller,
                readByBuyer: !req.isSeller,
                readBySeller: req.body.desc

            }

        },
            { new: true });

        res.status(201).send(savedMessage);
    } catch (error) {
        res.status(500).send(error)
    }
}



exports.getMessages = async (req, res, next) => {

    try {
        const messages = await Message.find({ conversationId: req.params.id });
        res.status(200).send(messages);

    } catch (error) {
        res.status(500).send(error)
    }
}