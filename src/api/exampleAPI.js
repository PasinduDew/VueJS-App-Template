export default class exampleService {
  constructor(axiosInstance) {
    this.httpClient = axiosInstance;
  }

  /**
   * Description:
   * Author:
   * Last Updated:
   */
  async getWeather() {
    try {
      const { data, headers } = await this.httpClient.get(`/current`, {
        params: {
          access_key: "cb7c109549066567f2038891502e3cf3",
          query: "Colombo",
        },
      });
      return [null, data, headers];
    } catch (error) {
      console.error(error);
      return [error, null, null];
    }
  }
}
