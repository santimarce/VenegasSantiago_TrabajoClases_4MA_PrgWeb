import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './teacher/teacher.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspecialidadModule } from './course/especialidad.module';

@Module({
  imports: [TypeOrmModule,
    TeacherModule,
    EspecialidadModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: false,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
