const asyncwrapper = (fn) => {
    return async (req,res,next) => {
        try {
            await fn(req,res)
        } catch (error) {
            res.status(500).json({msg: error})
            next()
        }
    }
}

module.exports = asyncwrapper