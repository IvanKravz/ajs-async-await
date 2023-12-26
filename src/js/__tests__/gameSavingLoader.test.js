import GameSavingLoader from '../gameSavingLoader'

test('Проверка работы GameSavingLoader без ошибок', async () => {
        const hitman = {
            id: 9,
            created: 1546300800,
            userInfo:{
                id: 1,
                name: "Hitman",
                level: 10,
                points: 2000,
            }
        }
    
        const res = await GameSavingLoader.load();
        expect(res).toEqual(hitman);
})

test('Проверка работы GameSavingLoader на наличие ошибки', async () => {
    function testReadReject() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(new Error('ooops'));
          }, 1000);
        });
      }
    await expect(testReadReject()).rejects.toThrow(new Error('ooops'));
})
