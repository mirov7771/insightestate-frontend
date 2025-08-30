import {ChangeEvent, FC} from 'react';
import styles from './Filter.module.scss';
import {Checkbox} from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { FilterLayout } from '@/widgets/Filter/FilterLayout';
import { useSearchParams } from 'react-router';

export const Developer: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, developer, city } = useFilters();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => ({
      ...filtersState,
      pageNumber: 0,
      developer: filtersState.developer?.includes(e.target.value)
        ? filtersState.developer?.filter((val) => val !== e.target.value)
        : [...(filtersState.developer || []), e.target.value],
    }));
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  const handleReset = () => {
    setFilters((filtersState) => ({
      ...filtersState,
      pageNumber: 0,
      developer: [],
    }));
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  return (
    <FilterLayout
      name={formatMessage({ id: 'developer' })}
      isActiveFilter={!!developer?.length}
      onResetFilter={handleReset}
      filter={
        <div className={`${styles.content} ${styles.content__border}`}>
          {city?.includes('Phuket') || city?.includes('Bangkok') || city?.length === 0 ? (<>
            <Checkbox
                name="developer"
                value="Origin Property"
                onChange={handleClick}
                checked={developer?.includes('Origin Property')}
                label="Origin Property"
            />
            <Checkbox
                name="developer"
                value="Sansiri"
                onChange={handleClick}
                checked={developer?.includes('Sansiri')}
                label="Sansiri"
            />
          </>) : (
              <></>
          )}
          {city?.includes('Phuket') || city?.length === 0 ? (<>
            <Checkbox
                name="developer"
                value="ABC Developer Co., Ltd."
                onChange={handleClick}
                checked={developer?.includes('ABC Developer Co., Ltd.')}
                label="ABC Developer Co., Ltd."
            />
            <Checkbox
                name="developer"
                value="Able Land Co., Ltd"
                onChange={handleClick}
                checked={developer?.includes('Able Land Co., Ltd')}
                label="Able Land Co., Ltd"
            />
            <Checkbox
                name="developer"
                value="Amal group"
                onChange={handleClick}
                checked={developer?.includes('Amal group')}
                label="Amal group"
            />
            <Checkbox
                name="developer"
                value="Andaman Asset Solution Co., Ltd."
                onChange={handleClick}
                checked={developer?.includes('Andaman Asset Solution Co., Ltd.')}
                label="Andaman Asset Solution Co., Ltd."
            />
            <Checkbox
                name="developer"
                value="Andaman Riviera Construction"
                onChange={handleClick}
                checked={developer?.includes('Andaman Riviera Construction')}
                label="Andaman Riviera Construction"
            />
            <Checkbox
                name="developer"
                value="Anocha Property"
                onChange={handleClick}
                checked={developer?.includes('Anocha Property')}
                label="Anocha Property"
            />
            <Checkbox
                name="developer"
                value="Art House Group"
                onChange={handleClick}
                checked={developer?.includes('Art House Group')}
                label="Art House Group"
            />
            <Checkbox
                name="developer"
                value="Karon"
                onChange={handleClick}
                checked={developer?.includes('Karon')}
                label="Karon"
            />
            <Checkbox
                name="developer"
                value="Banyan Group Residences"
                onChange={handleClick}
                checked={developer?.includes('Banyan Group Residences')}
                label="Banyan Group Residences"
            />
            <Checkbox
                name="developer"
                value="Bestart Heaven Co.,Ltd."
                onChange={handleClick}
                checked={developer?.includes('Bestart Heaven Co.,Ltd.')}
                label="Bestart Heaven Co.,Ltd."
            />
            <Checkbox
                name="developer"
                value="Billfishing Phuket Co., Ltd."
                onChange={handleClick}
                checked={developer?.includes('Billfishing Phuket Co., Ltd.')}
                label="Billfishing Phuket Co., Ltd."
            />
            <Checkbox
                name="developer"
                value="Boat Pattana Co., Ltd."
                onChange={handleClick}
                checked={developer?.includes('Boat Pattana Co., Ltd.')}
                label="Boat Pattana Co., Ltd."
            />
            <Checkbox
                name="developer"
                value="Botanica Luxury Phuket Co.,ltd"
                onChange={handleClick}
                checked={developer?.includes('Botanica Luxury Phuket Co.,ltd')}
                label="Botanica Luxury Phuket Co.,ltd"
            />
            <Checkbox
                name="developer"
                value="CG Capital"
                onChange={handleClick}
                checked={developer?.includes('CG Capital')}
                label="CG Capital"
            />
            <Checkbox
                name="developer"
                value="Citygate Exclusive Development Co., Ltd"
                onChange={handleClick}
                checked={developer?.includes('Citygate Exclusive Development Co., Ltd')}
                label="Citygate Exclusive Development Co., Ltd"
            />
            <Checkbox
                name="developer"
                value="East Wind Thai"
                onChange={handleClick}
                checked={developer?.includes('East Wind Thai')}
                label="East Wind Thai"
            />
            <Checkbox
                name="developer"
                value="Fantasea Plus"
                onChange={handleClick}
                checked={developer?.includes('Fantasea Plus')}
                label="Fantasea Plus"
            />
            <Checkbox
                name="developer"
                value="Gaona Phuket Co., Ltd"
                onChange={handleClick}
                checked={developer?.includes('Gaona Phuket Co., Ltd')}
                label="Gaona Phuket Co., Ltd"
            />
            <Checkbox
                name="developer"
                value="Glam Estate Co., Ltd."
                onChange={handleClick}
                checked={developer?.includes('Glam Estate Co., Ltd.')}
                label="Glam Estate Co., Ltd."
            />
            <Checkbox
                name="developer"
                value="GOOD TEAM 888"
                onChange={handleClick}
                checked={developer?.includes('GOOD TEAM 888')}
                label="GOOD TEAM 888"
            />
            <Checkbox
                name="developer"
                value="Habitat Group"
                onChange={handleClick}
                checked={developer?.includes('Habitat Group')}
                label="Habitat Group"
            />
            <Checkbox
                name="developer"
                value="Harmony Group"
                onChange={handleClick}
                checked={developer?.includes('Harmony Group')}
                label="Harmony Group"
            />
            <Checkbox
                name="developer"
                value="Hugs Management"
                onChange={handleClick}
                checked={developer?.includes('Hugs Management')}
                label="Hugs Management"
            />
            <Checkbox
                name="developer"
                value="JWP"
                onChange={handleClick}
                checked={developer?.includes('JWP')}
                label="JWP"
            />
            <Checkbox
                name="developer"
                value="Kireedee Property"
                onChange={handleClick}
                checked={developer?.includes('Kireedee Property')}
                label="Kireedee Property"
            />
            <Checkbox
                name="developer"
                value="Laguna Property"
                onChange={handleClick}
                checked={developer?.includes('Laguna Property')}
                label="Laguna Property"
            />
            <Checkbox
                name="developer"
                value="Layan Best View"
                onChange={handleClick}
                checked={developer?.includes('Layan Best View')}
                label="Layan Best View"
            />
            <Checkbox
                name="developer"
                value="Layan Green Park"
                onChange={handleClick}
                checked={developer?.includes('Layan Green Park')}
                label="Layan Green Park"
            />
            <Checkbox
                name="developer"
                value="Manor Phuket"
                onChange={handleClick}
                checked={developer?.includes('Manor Phuket')}
                label="Manor Phuket"
            />
            <Checkbox
                name="developer"
                value="Merit Phuket Co.,Ltd."
                onChange={handleClick}
                checked={developer?.includes('Merit Phuket Co.,Ltd.')}
                label="Merit Phuket Co.,Ltd."
            />
            <Checkbox
                name="developer"
                value="Metrics Development Thailand"
                onChange={handleClick}
                checked={developer?.includes('Metrics Development Thailand')}
                label="Metrics Development Thailand"
            />
            <Checkbox
                name="developer"
                value="Minor International Pcl"
                onChange={handleClick}
                checked={developer?.includes('Minor International Pcl')}
                label="Minor International Pcl"
            />
            <Checkbox
                name="developer"
                value="Mutti developing Co"
                onChange={handleClick}
                checked={developer?.includes('Mutti developing Co')}
                label="Mutti developing Co"
            />
            <Checkbox
                name="developer"
                value="Next Point Phuket"
                onChange={handleClick}
                checked={developer?.includes('Next Point Phuket')}
                label="Next Point Phuket"
            />
            <Checkbox
                name="developer"
                value="Ocean Group Asia"
                onChange={handleClick}
                checked={developer?.includes('Ocean Group Asia')}
                label="Ocean Group Asia"
            />
            <Checkbox
                name="developer"
                value="Ornsirin Group"
                onChange={handleClick}
                checked={developer?.includes('Ornsirin Group')}
                label="Ornsirin Group"
            />
            <Checkbox
                name="developer"
                value="Pearl Island Property Co., Ltd."
                onChange={handleClick}
                checked={developer?.includes('Pearl Island Property Co., Ltd.')}
                label="Pearl Island Property Co., Ltd."
            />
            <Checkbox
                name="developer"
                value="Phuket9 Co., Ltd."
                onChange={handleClick}
                checked={developer?.includes('Phuket9 Co., Ltd.')}
                label="Phuket9 Co., Ltd."
            />
            <Checkbox
                name="developer"
                value="Plan Estate Co., Ltd."
                onChange={handleClick}
                checked={developer?.includes('Plan Estate Co., Ltd.')}
                label="Plan Estate Co., Ltd."
            />
            <Checkbox
                name="developer"
                value="Princess Villa Ltd."
                onChange={handleClick}
                checked={developer?.includes('Princess Villa Ltd.')}
                label="Princess Villa Ltd."
            />
            <Checkbox
                name="developer"
                value="Railand Property International Co., Ltd."
                onChange={handleClick}
                checked={developer?.includes('Railand Property International Co., Ltd.')}
                label="Railand Property International Co., Ltd."
            />
            <Checkbox
                name="developer"
                value="Rhom Bho Property PLC"
                onChange={handleClick}
                checked={developer?.includes('Rhom Bho Property PLC')}
                label="Rhom Bho Property PLC"
            />
            <Checkbox
                name="developer"
                value="Serene Innovations & Developments"
                onChange={handleClick}
                checked={developer?.includes('Serene Innovations & Developments')}
                label="Serene Innovations & Developments"
            />
            <Checkbox
                name="developer"
                value="Siamese Asset Public Company Limited"
                onChange={handleClick}
                checked={developer?.includes('Siamese Asset Public Company Limited')}
                label="Siamese Asset Public Company Limited"
            />
            <Checkbox
                name="developer"
                value="Silvan Property Co., Ltd."
                onChange={handleClick}
                checked={developer?.includes('Silvan Property Co., Ltd.')}
                label="Silvan Property Co., Ltd."
            />
            <Checkbox
                name="developer"
                value="Sunny Development Group"
                onChange={handleClick}
                checked={developer?.includes('Sunny Development Group')}
                label="Sunny Development Group"
            />
            <Checkbox
                name="developer"
                value="The Chardonnay Co., Ltd."
                onChange={handleClick}
                checked={developer?.includes('The Chardonnay Co., Ltd.')}
                label="The Chardonnay Co., Ltd."
            />
            <Checkbox
                name="developer"
                value="The One Aura"
                onChange={handleClick}
                checked={developer?.includes('The One Aura')}
                label="The One Aura"
            />
            <Checkbox
                name="developer"
                value="The One Phuket Co., Ltd."
                onChange={handleClick}
                checked={developer?.includes('The One Phuket Co., Ltd.')}
                label="The One Phuket Co., Ltd."
            />
            <Checkbox
                name="developer"
                value="T.H. Group Phuket Co., Ltd."
                onChange={handleClick}
                checked={developer?.includes('T.H. Group Phuket Co., Ltd.')}
                label="T.H. Group Phuket Co., Ltd."
            />
            <Checkbox
                name="developer"
                value="TION STAR GROUP CO., LTD"
                onChange={handleClick}
                checked={developer?.includes('TION STAR GROUP CO., LTD')}
                label="TION STAR GROUP CO., LTD"
            />
            <Checkbox
                name="developer"
                value="Trinity Property Co., Ltd."
                onChange={handleClick}
                checked={developer?.includes('Trinity Property Co., Ltd.')}
                label="Trinity Property Co., Ltd."
            />
            <Checkbox
                name="developer"
                value="Uni Power Holding Co., Ltd."
                onChange={handleClick}
                checked={developer?.includes('Uni Power Holding Co., Ltd.')}
                label="Uni Power Holding Co., Ltd."
            />
            <Checkbox
                name="developer"
                value="United  Developers Corporation Co.,Ltd."
                onChange={handleClick}
                checked={developer?.includes('United  Developers Corporation Co.,Ltd.')}
                label="United  Developers Corporation Co.,Ltd."
            />
            <Checkbox
                name="developer"
                value="Visionary Property"
                onChange={handleClick}
                checked={developer?.includes('Visionary Property')}
                label="Visionary Property"
            />
            <Checkbox
                name="developer"
                value="VL Phuket Company Limited"
                onChange={handleClick}
                checked={developer?.includes('VL Phuket Company Limited')}
                label="VL Phuket Company Limited"
            />
            <Checkbox
                name="developer"
                value="Wallaya Villas"
                onChange={handleClick}
                checked={developer?.includes('Wallaya Villas')}
                label="Wallaya Villas"
            />
            <Checkbox
                name="developer"
                value="World Corporation Public Company Limited"
                onChange={handleClick}
                checked={developer?.includes('World Corporation Public Company Limited')}
                label="World Corporation Public Company Limited"
            />
            <Checkbox
                name="developer"
                value="Zenithy Development"
                onChange={handleClick}
                checked={developer?.includes('Zenithy Development')}
                label="Zenithy Development"
            />
            <Checkbox
                name="developer"
                value="Zero Developments Co., Ltd."
                onChange={handleClick}
                checked={developer?.includes('Zero Developments Co., Ltd.')}
                label="Zero Developments Co., Ltd."
            />
          </>) : (
              <></>
          )}
          {city?.includes('Bangkok') || city?.length === 0 ? (<>
            <Checkbox
                name="developer"
                value="Ananda Development"
                onChange={handleClick}
                checked={developer?.includes('Ananda Development')}
                label="Ananda Development"
            />
            <Checkbox
                name="developer"
                value="Charn Issara Development"
                onChange={handleClick}
                checked={developer?.includes('Charn Issara Development')}
                label="Charn Issara Development"
            />
            <Checkbox
                name="developer"
                value="Eastern Star Real Estate"
                onChange={handleClick}
                checked={developer?.includes('Eastern Star Real Estate')}
                label="Eastern Star Real Estate"
            />
            <Checkbox
                name="developer"
                value="Grande Asset Hotels & Properties"
                onChange={handleClick}
                checked={developer?.includes('Grande Asset Hotels & Properties')}
                label="Grande Asset Hotels & Properties"
            />
            <Checkbox
                name="developer"
                value="Noble Development"
                onChange={handleClick}
                checked={developer?.includes('Noble Development')}
                label="Noble Development"
            />
            <Checkbox
                name="developer"
                value="One Bangkok Company Limited"
                onChange={handleClick}
                checked={developer?.includes('One Bangkok Company Limited')}
                label="One Bangkok Company Limited"
            />
            <Checkbox
                name="developer"
                value="One.Six Development Corporation Limited"
                onChange={handleClick}
                checked={developer?.includes('One.Six Development Corporation Limited')}
                label="One.Six Development Corporation Limited"
            />
            <Checkbox
                name="developer"
                value="PACE Development"
                onChange={handleClick}
                checked={developer?.includes('PACE Development')}
                label="PACE Development"
            />
            <Checkbox
                name="developer"
                value="SC ASSET Corporation Public Company Limited"
                onChange={handleClick}
                checked={developer?.includes('SC ASSET Corporation Public Company Limited')}
                label="SC ASSET Corporation Public Company Limited"
            />
            <Checkbox
                name="developer"
                value="Singha Estate"
                onChange={handleClick}
                checked={developer?.includes('Singha Estate')}
                label="Singha Estate"
            />
          </>) : (
              <></>
          )}
          {city?.includes('Pattaya') || city?.length === 0 ? (<>
            <Checkbox
                name="developer"
                value="BAANMAE VILLA"
                onChange={handleClick}
                checked={developer?.includes('BAANMAE VILLA')}
                label="BAANMAE VILLA"
            />
            <Checkbox
                name="developer"
                value="Empire Group"
                onChange={handleClick}
                checked={developer?.includes('Empire Group')}
                label="Empire Group"
            />
            <Checkbox
                name="developer"
                value="Global Top Group"
                onChange={handleClick}
                checked={developer?.includes('Global Top Group')}
                label="Global Top Group"
            />
            <Checkbox
                name="developer"
                value="Lunique Real Estate"
                onChange={handleClick}
                checked={developer?.includes('Lunique Real Estate')}
                label="Lunique Real Estate"
            />
            <Checkbox
                name="developer"
                value="Once"
                onChange={handleClick}
                checked={developer?.includes('Once')}
                label="Once"
            />
            <Checkbox
                name="developer"
                value="Richly Field international . Co.,Ltd"
                onChange={handleClick}
                checked={developer?.includes('Richly Field international . Co.,Ltd')}
                label="Richly Field international . Co.,Ltd"
            />
            <Checkbox
                name="developer"
                value="Shuen Jit Co., Ltd."
                onChange={handleClick}
                checked={developer?.includes('Shuen Jit Co., Ltd.')}
                label="Shuen Jit Co., Ltd."
            />
            <Checkbox
                name="developer"
                value="SLR Development Co., Ltd"
                onChange={handleClick}
                checked={developer?.includes('SLR Development Co., Ltd')}
                label="SLR Development Co., Ltd"
            />
            <Checkbox
                name="developer"
                value="The Riviera Group"
                onChange={handleClick}
                checked={developer?.includes('The Riviera Group')}
                label="The Riviera Group"
            />
            <Checkbox
                name="developer"
                value="The Siam Oriental Trading Co., Ltd."
                onChange={handleClick}
                checked={developer?.includes('The Siam Oriental Trading Co., Ltd.')}
                label="The Siam Oriental Trading Co., Ltd."
            />
          </>) : (
              <></>
            )}
        </div>
      }
    />
  );
};
