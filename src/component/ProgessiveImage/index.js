import React from 'react';
import { View, ActivityIndicator, Image, ImageBackground } from 'react-native';
// import FastImage from 'react-native-fast-image';
import { colors, Utils } from '../../contants';

export default class ProgessiveImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
        // FastImage.preload([
        //     {
        //         uri: 'https://i.pinimg.com/736x/5a/02/5e/5a025e222970a3dd2c3706bde935ae15.jpg',

        //     },
        //     {
        //         uri: 'https://i.pinimg.com/736x/5a/02/5e/5a025e222970a3dd2c3706bde935ae15.jpg',

        //     },
        //     localthumbsource={ImagesPath.Tabbar.Katlego.dummyBanner}

        // ])
    }
    render() {
        return (
            <View>
                <Image
                    onLoadStart={(e) => {
                        this.setState({ loading: true })
                    }}
                    onLoadEnd={(e) => {
                        this.setState({ loading: false })
                    }}
                    {...this.props}
                />
                {this.state.loading ?
                    <ActivityIndicator
                        size={"small"}
                        color={colors.black}
                        style={{ bottom: Utils.ScreenWidth(5.5) }} />
                    :
                    <>
                        {/* <FastImage
                            style={{ height: "100%", width: "100%", position: "absolute", top: 0, left: 0 }}
                            resizeMode={this.props.resizeMode}
                            source={this.props.localthumbsource, { cache: FastImage.cacheControl.immutable }} /> */}
                        {/* <Image
                            resizeMode={this.props.resizeMode}
                            source={{ cache: FastImage.cacheControl.immutable }}
                            style={{ height: "100%", width: Utils.ScreenWidth(10.8), position: "absolute" }} /> */}
                    </>
                }
            </View>
        );
    }
}