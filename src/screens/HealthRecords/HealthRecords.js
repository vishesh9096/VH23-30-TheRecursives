import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import AppleHealthKit, { HealthValue, HealthKitPermissions } from 'react-native-health';

const permissions = {
    permissions: {
        read: [
            AppleHealthKit.Constants.Permissions.SleepAnalysis,
            AppleHealthKit.Constants.Permissions.AppleExerciseTime,
            AppleHealthKit.Constants.Permissions.Weight
        ],
    }
} 

class HealthKitTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sleep: null,
            sleepLoaded: false,
            weight: null,
            weightLoaded: false,
            exercise: null,
            exerciseLoaded: false,
        };
    }

    componentDidMount() {
        const options = { startDate: (new Date(2023, 1, 1)).toISOString() };

        AppleHealthKit.initHealthKit(permissions, (error) => {
            if (error) {
                console.warn('[ERROR] Cannot grant permissions!');
            }
        });

        AppleHealthKit.getSleepSamples(options, (err, results) => {
            try {
                this.setState({ sleep: results, sleepLoaded: true });
            } catch (error) {
                console.error(err);
            }
        });

        AppleHealthKit.getAppleExerciseTime(options, (err, results) => {
            try {
                this.setState({ exercise: results, exerciseLoaded: true });
            } catch (error) {
                console.error(err);
            }
        });

        AppleHealthKit.getLatestWeight(options, (err, results) => {
            try {
                if (results !== undefined) {
                    this.setState({ weight: results, weightLoaded: true });
                } else {
                    this.setState({ weight: 'No weight recorded', weightLoaded: true });
                }
            } catch (error) {
                console.error(err);
            }
        });
    }

    render() {
        return (
            <ScrollView style={{ padding: 12 }}>
                <Text style={{ fontStyle: 'italic' }}>
                    This data comes from Apple HealthKit. While not currently used by our application,
                    we plan to implement this data in future versions of the app.
                </Text>
                <Text style={{ fontStyle: 'italic' }}>The range for this data is the past year.</Text>
                {this.state.sleepLoaded && (
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Sleep data:</Text>
                        {this.state.sleep?.length > 0 ? (
                            this.state.sleep.map((sleepEvent) => (
                                <View key={sleepEvent.startDate} style={{ padding: 6, backgroundColor: 'lightgray', margin: 6 }}>
                                    <Text>Start Date: {sleepEvent.startDate}</Text>
                                    <Text>End Date: {sleepEvent.startDate}</Text>
                                    <Text>Status: {sleepEvent.value}</Text>
                                </View>
                            ))
                        ) : (
                            <Text>No sleep data recorded.</Text>
                        )}
                    </View>
                )}
                {this.state.exerciseLoaded && (
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Energy Burned data:</Text>
                        {this.state.exercise && this.state.exercise.length > 0 ? (
                            <Text>{JSON.stringify(this.state.exercise).toString()}</Text>
                        ) : (
                            <Text>No exercise data recorded.</Text>
                        )}
                    </View>
                )}
                {this.state.weightLoaded && (
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Weight data:</Text>
                        {this.state.weight ? (
                            <Text>User's weight: {this.state.weight.value} lbs.</Text>
                        ) : (
                            <Text>No user weight recorded.</Text>
                        )}
                    </View>
                )}
            </ScrollView>
        );
    }
}

export default HealthKitTest;
// import { View, Text } from 'react-native'
// import React from 'react'
// import appleHealthKit from 'react-native-health'

// const HealthRecords = () => {
//     let options = {
//         permissions: {
//           read: ['Height', 'Weight', 'StepCount', 'DateOfBirth', 'BodyMassIndex'],
//           write: ['Weight', 'StepCount', 'BodyMassIndex'],
//         },
//       }
//       appleHealthKit.initHealthKit(
//         (options: HealthInputOptions),
//         (err: string, results: boolean) => {
//           if (err) {
//             console.log('error initializing Healthkit: ', err)
//             return
//           }
//           // Healthkit is initialized...
//           // now safe to read and write Healthkit data...
//         },
//       )
//   return (
//     <View>
//       <Text>HealthRecords</Text>
//     </View>
//   )
// }

// export default HealthRecords