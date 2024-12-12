import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VehicleBodyInfo } from '../vehicle-body/vehicle-body';
import { VehicleChassisInfo } from '../vehicle-chassis';
import { VehicleInfo } from '../vehicle-info/vehicle-info';

export const DashboardPage = () => {
  return (
    <div>
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Araç Ruhsat Bilgileri</TabsTrigger>
          <TabsTrigger value="body">Araç Gövdesi Bilgileri</TabsTrigger>
          <TabsTrigger value="chassis">Araç Şasi Bilgileri</TabsTrigger>
        </TabsList>
        <TabsContent className="w-full " value="account">
          <VehicleInfo />
        </TabsContent>
        <TabsContent className="" value="body">
          <VehicleBodyInfo />
        </TabsContent>
        <TabsContent value="chassis">
          <VehicleChassisInfo />
        </TabsContent>
      </Tabs>
    </div>
  );
};