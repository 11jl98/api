import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CompanyModule } from './modules/Company/company.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    CompanyModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,

      username: 'root',
      password: '123456',
      database: 'blog',
      synchronize: true,
      entities: [__dirname + '/**/*.model{.js,.ts}'],
    }),
  ],
})
export class AppModule {}
