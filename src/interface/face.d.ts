export interface FaceResultInterface {
  /** 用户id */
  userid: string;
}

export interface FaceDetectInterface {
  /** 人脸质量得分 */
  score: number;
  /** 用户id */
  userid?: string;
  /** 人脸x位置 */
  x: number;
  /** 人脸y位置 */
  y: number;
  /** 人脸宽度 */
  width: number;
  /** 人脸高度 */
  height: number;
  /** 人脸图片 */
  path?: string;
}
