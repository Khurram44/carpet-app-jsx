import React, {useCallback, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import MultiSlider from '@ptomasroos/react-native-multi-slider';



import RangeSlider from 'react-native-range-slider'

const PriceSlider = () => {
    const [sliderOneChanging, setSliderOneChanging] = React.useState(false);
  const [sliderOneValue, setSliderOneValue] = React.useState([5]);
  const [multiSliderValue, setMultiSliderValue] = React.useState([3, 7]);
  const [
    nonCollidingMultiSliderValue,
    setNonCollidingMultiSliderValue,
  ] = React.useState([0, 100]);

 

 

  return (
    <View style={{alignSelf:'center'}}>
         <MultiSlider
          values={[multiSliderValue[0], multiSliderValue[1]]}
          sliderLength={300}
          onValuesChange={setMultiSliderValue}
          min={0}
          max={10}
          step={1}
          allowOverlap
          snapped
        />
    </View>
    // <View style={styles.sliderOne}>
    //       <Text style={styles.text}>Two Markers:</Text>
    //       <Text style={styles.text}>{multiSliderValue[0]} </Text>
    //       <Text style={styles.text}>{multiSliderValue[1]}</Text>
    //     </View>
    //     <MultiSlider
    //       values={[multiSliderValue[0], multiSliderValue[1]]}
    //       sliderLength={250}
    //       onValuesChange={multiSliderValuesChange}
    //       min={0}
    //       max={10}
    //       step={1}
    //       allowOverlap
    //       snapped
    //     />
    //   </View>
    //   </View>
   
     
  );
};

export default PriceSlider;

const styles = StyleSheet.create({

})