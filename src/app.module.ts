import { AppController } from '@/app/modules/initial/app.controller'
import { AppService } from '@/app/modules/initial/app.service'
import { Module } from '@nestjs/common'

@Module({
	imports: [],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
