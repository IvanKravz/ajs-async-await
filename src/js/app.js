import GameSavingLoader from './gameSavingLoader'

(async () => {
    try {
        return await GameSavingLoader.load()
    } catch (error){
        return error
    }
})();
