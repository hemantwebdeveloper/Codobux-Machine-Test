import React from 'react'
import SafeAreaContainer from '../../components/SafeAreaContainer'
import ContentContainer from '../../components/ContentContainer'
import Header from '../../components/Header'
import { StyleSheet, View } from 'react-native'
import { Label, SubHeading } from '../../components/Text'
import { useSelector } from 'react-redux'
import { COLORS } from '../../theme/colors'

function DetailedView() {

    const { profile } = useSelector((state) => state.user);

    const RenderField = ({ label = 'Name', value = "value" }) => {
        return <View style={styles.infoItem}>
            <Label style={{ width: '35%',color:`${COLORS.black}90` }}>{label}</Label>
            <Label style={{ width: '65%',fontWeight:'600' }}>{value}</Label>
        </View>
    }

    return (
        <SafeAreaContainer>
            <Header />
            <ContentContainer>
                <View style={styles.contentHeader}>
                    <SubHeading>Checkout Form</SubHeading>
                </View>
                <View style={styles.infobox}>
                    <RenderField
                        label={'Booking ID'}
                        value={profile?.bookingId}
                    />
                      <RenderField
                        label={'First Name'}
                        value={profile?.firstName}
                    />
                      <RenderField
                        label={'Last Name'}
                        value={profile?.lastName}
                    />
                    <RenderField
                        label={'Email'}
                        value={profile?.email}
                    />
                    <RenderField
                        label={'Date'}
                        value={profile?.date}
                    />
                    <RenderField
                        label={'Time'}
                        value={profile?.time}
                    />
                </View>
            </ContentContainer>
        </SafeAreaContainer>
    )
}

export default DetailedView;

const styles = StyleSheet.create({
    contentHeader: {
        paddingVertical:30,
        alignItems:'center',
        borderBottomWidth:2,
        borderColor:COLORS.lightGray
    },
    infobox: {
        paddingHorizontal:15,
        marginVertical:30,
    },
    infoItem:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom:10
    }
})