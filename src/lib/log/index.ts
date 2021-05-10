import log from 'electron-log'
import moment from 'moment'

// 日志文件等级，默认值：debug
log.transports.file.level = 'debug'

// 日志控制台等级，默认值：debug
log.transports.console.level = 'debug'

// 日志文件名，默认：今天日期
log.transports.file.fileName = moment().format('YYYYMMDD') + '.log'

// 日志大小，默认：100M，达到最大上限后，备份文件并重命名为：moment().format('YYYYMMDD')，有且仅有一个备份文件
log.transports.file.maxSize = 1048576 * 100

global.log = log
export default log