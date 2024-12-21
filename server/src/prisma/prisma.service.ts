import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient as PostgresClient } from '../../prisma/generated/client1';
import { PrismaClient as MongoClient } from '../../prisma/generated/client2';
import { createClient, RedisClientType } from '@redis/client';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  // Separate Prisma clients for PostgresSQL and MongoDB
  private readonly postgresClient: PostgresClient;
  private readonly mongoClient: MongoClient;
  private readonly redisClient: RedisClientType;

  constructor() {
    // Initialize Prisma clients
    this.postgresClient = new PostgresClient();
    this.mongoClient = new MongoClient();

    // Initialize Redis client
    this.redisClient = createClient({
      url: 'redis://localhost:6379',
    });
  }

  async onModuleInit(): Promise<void> {
    try {
      // Connect to PostgresSQL
      await this.postgresClient.$connect();
      console.log('Connected to PostgresSQL database successfully!');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      console.error('Error connecting to PostgresSQL');
    }

    try {
      // Connect to MongoDB
      await this.mongoClient.$connect();
      console.log('Connected to MongoDB database successfully!');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      console.error('Error connecting to MongoDB');
    }

    try {
      // Connect to Redis
      await this.redisClient.connect();
      console.log('Connected to Redis successfully!', this.redisClient.isReady);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      console.error('Error connecting to Redis');
    }
  }

  async onModuleDestroy(): Promise<void> {
    try {
      await this.postgresClient.$disconnect();
      console.log('Disconnected from PostgresSQL successfully!');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      console.error('Error disconnecting from PostgresSQL');
    }

    try {
      await this.mongoClient.$disconnect();
      console.log('Disconnected from MongoDB successfully!');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      console.error('Error disconnecting from MongoDB');
    }

    try {
      await this.redisClient.disconnect();
      console.log('Disconnected from Redis successfully!');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      console.error('Error disconnecting from Redis');
    }
  }

  // Export PostgresSQL client for usage
  getPostgresClient(): PostgresClient {
    return this.postgresClient;
  }

  // Export MongoDB client for usage
  getMongoClient(): MongoClient {
    return this.mongoClient;
  }

  // Export Redis client for usage
  getRedisClient(): RedisClientType {
    return this.redisClient;
  }
}
