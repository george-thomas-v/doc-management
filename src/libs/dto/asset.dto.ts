import { ApiProperty } from '@nestjs/swagger';
import { EDocumentStatus } from '@app/enums';
import { UserEntity } from '@app/entities';
import { UserDto } from './user.dto';

export class DocumentDto {
  @ApiProperty({ example: 'a934a22e-3b44-4c29-b9d4-d221f243fb7d' })
  id: string;

  @ApiProperty({ example: 'uploads/documents/file-abc.pdf' })
  key: string;

  @ApiProperty({ example: 'application/pdf' })
  mimeType: string;

  @ApiProperty({ enum: EDocumentStatus, example: EDocumentStatus.PROCESSING })
  documentStatus: EDocumentStatus;

  @ApiProperty({ example: 'https://your-bucket.s3.region.amazonaws.com/uploads/documents/file-abc.pdf', nullable: true })
  objectURL: string | null;

  @ApiProperty({ type: UserDto })
  user: UserEntity;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false, nullable: true })
  deletedAt?: Date;
}
