import { updateSetting } from '@/core/common'
import { setDesktopLyricColor } from '@/core/desktopLyric'
import { useI18n } from '@/lang'
import { memo } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import SubTitle from '../../components/SubTitle'

const themes = [
  ['#51A467', 'rgba(0,0,0,0.6)'], // 绿色
  ['#FFB916', 'rgba(0,0,0,0.6)'], // 黄色
  ['#5162D0', 'rgba(0,0,0,0.6)'], // 蓝色
  ['#FF307B', 'rgba(0,0,0,0.6)'], // 玫红
  ['#ef6976', 'rgba(0,0,0,0.6)'], // 粉色
  ['#7E53DA', 'rgba(0,0,0,0.6)'], // 紫色
  ['#4F83AF', 'rgba(0,0,0,0.6)'], // 淡雅深蓝
  ['#000000', '#ffffff'],         // 黑色
  ['#ffffff', 'rgba(0,0,0,0.6)'], // 白色
  // 自定义新增颜色预设（可自由增减或修改十六进制色值）
  ['#FF6B35', 'rgba(0,0,0,0.6)'], // 鲜橙色
  ['#00C9A7', 'rgba(0,0,0,0.6)'], // 薄荷绿
  ['#00BBF9', 'rgba(0,0,0,0.6)'], // 亮蓝色
  ['#F15BB5', 'rgba(0,0,0,0.6)'], // 霓虹粉
  ['#9B5DE5', 'rgba(0,0,0,0.6)'], // 罗兰紫
] as const
type Theme = typeof themes[number]

const ThemeItem = ({ color, change }: {
  color: Theme
  change: (color: Theme) => void
}) => {
  return (
    <TouchableOpacity style={styles.item} activeOpacity={0.5} onPress={() => { change(color) }}>
      <View style={styles.colorContent}>
        <View style={{ ...styles.image, backgroundColor: color[0] }}></View>
      </View>
    </TouchableOpacity>
  )
}

export default memo(() => {
  const t = useI18n()

  const setThemeDesktopLyric = (color: Theme) => {
    void setDesktopLyricColor(null, color[0], color[1]).then(() => {
      updateSetting({ 'desktopLyric.style.lyricPlayedColor': color[0], 'desktopLyric.style.lyricShadowColor': color[1] })
    })
  }

  return (
    <SubTitle title={t('setting_lyric_desktop_theme')}>
      <View style={styles.list}>
        {
          themes.map((c, i) => <ThemeItem key={i.toString()} color={c} change={setThemeDesktopLyric} />)
        }
      </View>
    </SubTitle>
  )
})

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap', // 支持自动折行展示多行色块
  },
  item: {
    marginRight: 15,
    marginTop: 8,
    alignItems: 'center',
    width: 26,
  },
  colorContent: {
    width: 26,
    height: 26,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 20,
    height: 20,
    borderRadius: 4,
    elevation: 1,
  },
})
  const setThemeDesktopLyric = (color: Theme) => {
    // const shadowColor = 'rgba(0,0,0,0.6)'
    void setDesktopLyricColor(null, color[0], color[1]).then(() => {
      updateSetting({ 'desktopLyric.style.lyricPlayedColor': color[0], 'desktopLyric.style.lyricShadowColor': color[1] })
    })
  }

  return (
    <SubTitle title={t('setting_lyric_desktop_theme')}>
      <View style={styles.list}>
        {
          themes.map((c, i) => <ThemeItem key={i.toString()} color={c} change={setThemeDesktopLyric} />)
        }
      </View>
    </SubTitle>
  )
})

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    marginRight: 15,
    marginTop: 5,
    alignItems: 'center',
    width: 26,
    // backgroundColor: 'rgba(0,0,0,0.2)',
  },
  colorContent: {
    width: 26,
    height: 26,
    borderRadius: 4,
    // borderWidth: 1.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 20,
    height: 20,
    borderRadius: 4,
    elevation: 1,
  },
})
