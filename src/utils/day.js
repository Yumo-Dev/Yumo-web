import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

export function getBeijingTimestampWithDayjs() {
  const beijingTime = dayjs().tz('Asia/Shanghai')
  const timestampMs = beijingTime.valueOf() 
  const timestampSec = beijingTime.unix()

  return {
    timestampMs,
    timestampSec,
    formatted: beijingTime.format('YYYY-MM-DD HH:mm:ss'),
    iso: beijingTime.toISOString()
  }
}
