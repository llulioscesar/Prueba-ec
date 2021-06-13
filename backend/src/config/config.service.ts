export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  get(key: string): any {
    const { env } = process;
    return env[key];
  }
}