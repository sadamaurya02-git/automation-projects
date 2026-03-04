import errorMessages from '../test-data/qa/errorMessages.json';

export async function retryOnCustomError(
  fn: () => Promise<void>,
  retries: number,
  customMessage: string
) {
  for (let attempt = 1; attempt <= retries + 1; attempt++) {
    try {
      await fn();
      return; // success → exit
    } catch (error: any) {

      if (
        error.message.includes(customMessage) &&
        attempt <= retries
      ) {
        console.log(
          `Retrying due to custom error: "${customMessage}" (Attempt ${attempt})`
        );
        continue;
      }

      throw error; // Not matching → fail immediately
    }
  }
}